import { ProcessorConfig } from './common/processorConfig'

export default {
    chainName: 'moonbeam',
    prefix: 'moonbeam',
    dataSource: {
        archive: 'https://moonbeam-beta.indexer.gc.subsquid.io/v4/graphql',
        chain: 'wss://moonbeam.api.onfinality.io/public-ws',
    },
    typesBundle: 'moonbeam',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
} as ProcessorConfig
