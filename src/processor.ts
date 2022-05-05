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

processor.addEventHandler('generalCouncil.Proposed', modules.generalCouncil.events.handleProposed)
processor.addEventHandler('generalCouncil.Approved', modules.generalCouncil.events.handleApproved)
processor.addEventHandler('generalCouncil.Dissaproved', modules.generalCouncil.events.handleDisapproved)
processor.addEventHandler('generalCouncil.Closed', modules.generalCouncil.events.handleClosed)
processor.addEventHandler('generalCouncil.Voted', modules.generalCouncil.events.handleVoted)
processor.addEventHandler('generalCouncil.Executed', modules.generalCouncil.events.handleExecuted)

processor.addEventHandler('technicalCommittee.Proposed', modules.techComittee.events.handleProposed)
processor.addEventHandler('technicalCommittee.Approved', modules.techComittee.events.handleApproved)
processor.addEventHandler('technicalCommittee.Dissaproved', modules.techComittee.events.handleDisapproved)
processor.addEventHandler('technicalCommittee.Closed', modules.techComittee.events.handleClosed)
processor.addEventHandler('technicalCommittee.Voted', modules.techComittee.events.handleVoted)
processor.addEventHandler('technicalCommittee.Executed', modules.techComittee.events.handleExecuted)

processor.addEventHandler('treasury.Proposed', modules.treasury.events.handleProposed)
processor.addEventHandler('treasury.Awarded', modules.treasury.events.handleAwarded)
processor.addEventHandler('treasury.Rejected', modules.treasury.events.handleRejected)

processor.addEventHandler('tips.NewTip', modules.tips.events.handleNewTip)
processor.addEventHandler('tips.TipsClosed', modules.tips.events.handleClosed)
processor.addEventHandler('tips.TipsRetracted', modules.tips.events.handleRetracted)
processor.addEventHandler('tips.TipsSlashed', modules.tips.events.handleSlashed)

processor.addEventHandler('bounties.BountyProposed', modules.bounties.events.handleProposed)
processor.addEventHandler('bounties.BountyRejected', modules.bounties.events.handleRejected)
processor.addEventHandler('bounties.BountyBecameActive', modules.bounties.events.handleBecameActive)
processor.addEventHandler('bounties.BountyAwarded', modules.bounties.events.handleAwarded)
processor.addEventHandler('bounties.BountyClaimed', modules.bounties.events.handleClaimed)
processor.addEventHandler('bounties.BountyCanceled', modules.bounties.events.handleCanceled)
processor.addEventHandler('bounties.BountyExtended', modules.bounties.events.handleExtended)

processor.addPostHook(handleChainState)

processor.run()
