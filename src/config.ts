import { ProcessorConfig } from './common/processorConfig'

export default {
    chainName: 'karura',
    prefix: 'karura',
    dataSource: {
        archive: 'https://karura.indexer.gc.subsquid.io/v4/graphql',
        chain: 'wss://karura.api.onfinality.io/public-ws',
    },
    typesBundle: 'karura',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
} as ProcessorConfig
