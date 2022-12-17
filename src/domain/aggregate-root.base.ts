import { Entity } from "../domain/entity.base";

export abstract class AggregateRoot<T> extends Entity<T> {
    private _domainEvents: DomainEvent = [];
    get domainEvents : DomainEvent[] {
        return this._domainEvents;
    }

    protected addEvents(domainEvents : DomainEvent) : void{
        this._domainEvents.push(domainEvents);
        DomainEvents.prepareForPublish(this);
    }

    

    protected clearEvents(){
        this._domainEvents = [];
    }
}
