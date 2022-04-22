import { ProcessorConfig } from './common/processorConfig'

export default {
    chainName: 'bifrost',
    prefix: 'bifrost',
    dataSource: {
        archive: 'https://bifrost.indexer.gc.subsquid.io/v4/graphql',
        chain: 'wss://bifrost-parachain.api.onfinality.io/public-ws',
    },
    typesBundle: 'bifrost',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
} as ProcessorConfig
