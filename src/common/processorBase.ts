import { SubstrateProcessor } from '@subsquid/substrate-processor'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Parameters<T> = T extends (...args: infer T) => any ? T : never
type ChainName = 'polkadot' | 'kusama'

enum HandlerParams {
    NAME,
    OPTIONS,
    FUNC,
}
export interface ProcessorConfig {
    chainName: ChainName
    dataSource: Parameters<SubstrateProcessor['setDataSource']>[HandlerParams.NAME]
    typesBundle: Parameters<SubstrateProcessor['setTypesBundle']>[HandlerParams.NAME]
    batchSize?: Parameters<SubstrateProcessor['setBatchSize']>[HandlerParams.NAME]
    port?: Parameters<SubstrateProcessor['setPrometheusPort']>[HandlerParams.NAME]
    blockRange?: Parameters<SubstrateProcessor['setBlockRange']>[HandlerParams.NAME]
}
