import { ProcessorConfig } from './common/processorConfig'

export default {
    chainName: 'moonriver',
    prefix: 'moonriver',
    dataSource: {
        archive: 'https://moonriver-beta.indexer.gc.subsquid.io/v4/graphql',
        chain: 'wss://moonriver.api.onfinality.io/public-ws',
    },
    typesBundle: 'moonriver',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
} as ProcessorConfig
