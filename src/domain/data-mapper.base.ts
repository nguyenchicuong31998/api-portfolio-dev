export interface DataMapper<TDomainEntity> {
    toDomain(dalEntity: any): TDomainEntity;
    toDalEntity(entity: TDomainEntity): any;
}
