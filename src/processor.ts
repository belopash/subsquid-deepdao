import { SubstrateProcessor } from '@subsquid/substrate-processor'
import { DEFAULT_BATCH_SIZE, DEFAULT_PORT } from './common/consts'
import config from './config'
import { handleSet } from './handler/extrinsics/timestamp/set'

const processor = new SubstrateProcessor(`${config.chainName}-processor`)

processor.setTypesBundle(config.typesBundle)
processor.setBatchSize(config.batchSize || DEFAULT_BATCH_SIZE)
processor.setDataSource(config.dataSource)
processor.setPrometheusPort(config.port || DEFAULT_PORT)
processor.setBlockRange(config.blockRange || { from: 0 })

processor.addExtrinsicHandler('timestamp.set', handleSet)

processor.run()
