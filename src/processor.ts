import { SubstrateProcessor } from '@subsquid/substrate-processor'
import { handleChainState } from './chainState'
import config from './config'
import * as modules from './mappings'

const processor = new SubstrateProcessor(`${config.chainName}-processor`)

processor.setTypesBundle(config.typesBundle)
processor.setBatchSize(config.batchSize || 100)
processor.setDataSource(config.dataSource)
processor.setPrometheusPort(config.port || 3000)
processor.setBlockRange(config.blockRange || { from: 0 })

processor.addEventHandler('democracy.Proposed', modules.democracy.events.handleProposed)
processor.addEventHandler('democracy.Tabled', modules.democracy.events.handleTabled)
processor.addEventHandler('democracy.Started', modules.democracy.events.handleStarted)
processor.addEventHandler('democracy.Passed', modules.democracy.events.handlePassed)
processor.addEventHandler('democracy.NotPassed', modules.democracy.events.handleNotPassed)
processor.addEventHandler('democracy.Cancelled', modules.democracy.events.handleCancelled)
processor.addEventHandler('democracy.Executed', modules.democracy.events.handleExecuted)
processor.addExtrinsicHandler('democracy.vote', modules.democracy.extrinsics.handleVote)

processor.addEventHandler('democracy.PreimageNoted', modules.democracy.events.handlePreimageNoted)
processor.addEventHandler('democracy.PreimageUsed', modules.democracy.events.handlePreimageUsed)
processor.addEventHandler('democracy.PreimageInvalid', modules.democracy.events.handlePreimageInvalid)
processor.addEventHandler('democracy.PreimageMissing', modules.democracy.events.handlePreimageMissing)
processor.addEventHandler('democracy.PreimageReaped', modules.democracy.events.handlePreimageReaped)

processor.addEventHandler('councilCollective.Proposed', modules.council.events.handleProposed)
processor.addEventHandler('councilCollective.Approved', modules.council.events.handleApproved)
processor.addEventHandler('councilCollective.Dissaproved', modules.council.events.handleDisapproved)
processor.addEventHandler('councilCollective.Closed', modules.council.events.handleClosed)
processor.addEventHandler('councilCollective.Voted', modules.council.events.handleVoted)

processor.addEventHandler('techCommitteeCollective.Proposed', modules.techComittee.events.handleProposed)
processor.addEventHandler('techCommitteeCollective.Approved', modules.techComittee.events.handleApproved)
processor.addEventHandler('techCommitteeCollective.Dissaproved', modules.techComittee.events.handleDisapproved)
processor.addEventHandler('techCommitteeCollective.Closed', modules.techComittee.events.handleClosed)
processor.addEventHandler('techCommitteeCollective.Voted', modules.techComittee.events.handleVoted)

processor.addEventHandler('treasury.Proposed', modules.treasury.events.handleProposed)
processor.addEventHandler('treasury.Awarded', modules.treasury.events.handleAwarded)
processor.addEventHandler('treasury.Rejected', modules.treasury.events.handleRejected)

processor.addPostHook(handleChainState)

processor.run()
