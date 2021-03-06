// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IUpstreamsConfig {
    bootstrap_dns: string[];
    upstream_dns: string[];
}

export default class UpstreamsConfig {
    readonly _bootstrap_dns: string[];

    /**
     * Description: Bootstrap servers, port is optional after colon.  Empty value will reset it to default values.
     *
     * Example: 8.8.8.8:53,1.1.1.1:53
     */
    get bootstrapDns(): string[] {
        return this._bootstrap_dns;
    }

    static bootstrapDnsValidate(bootstrapDns: string[]): boolean {
        return bootstrapDns.reduce<boolean>((result, p) => result && (typeof p === 'string' && !!p.trim()), true);
    }

    readonly _upstream_dns: string[];

    /**
     * Description: Upstream servers, port is optional after colon.  Empty value will reset it to default values.
     *
     * Example: tls://1.1.1.1,tls://1.0.0.1
     */
    get upstreamDns(): string[] {
        return this._upstream_dns;
    }

    static upstreamDnsValidate(upstreamDns: string[]): boolean {
        return upstreamDns.reduce<boolean>((result, p) => result && (typeof p === 'string' && !!p.trim()), true);
    }

    constructor(props: IUpstreamsConfig) {
        this._bootstrap_dns = props.bootstrap_dns;
        this._upstream_dns = props.upstream_dns;
    }

    serialize(): IUpstreamsConfig {
        const data: IUpstreamsConfig = {
            bootstrap_dns: this._bootstrap_dns,
            upstream_dns: this._upstream_dns,
        };
        return data;
    }

    validate(): string[] {
        const validate = {
            bootstrap_dns: this._bootstrap_dns.reduce((result, p) => result && typeof p === 'string', true),
            upstream_dns: this._upstream_dns.reduce((result, p) => result && typeof p === 'string', true),
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: Partial<IUpstreamsConfig>): UpstreamsConfig {
        return new UpstreamsConfig({ ...this.serialize(), ...props });
    }
}
