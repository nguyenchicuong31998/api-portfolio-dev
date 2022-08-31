const isEntity = <T>(v: Entity<T>): v is Entity<T> => {
    return v instanceof Entity;
};
export abstract class Entity<T> {
    protected readonly id?: number;
    protected props: T;
    constructor(id: number, props: T) {
        this.id = id ? id : Math.floor(Math.random() * 100000);
        this.props = props;
    }

    public equals(object?: Entity<T>): boolean {
        console.log(object);
        if (object === null || object === undefined) {
            return false;
        }
        if (this === object) {
            return true;
        }
        if (!isEntity(object)) {
            return false;
        }
        return this.id === object.id;
    }
}

// interface UserProps {
//     id: string;
//     userName: string;
//     age: number;
// }

// class Users extends Entity<UserProps> {
//     constructor(props: UserProps) {
//         const { id, ...data } = props;
//         super(id, <UserProps>data);
//     }
// }
// const user1: UserProps = {
//     id: "2",
//     userName: "dsa",
//     age: 2,
// };

// const user3: UserProps = {
//     id: "3",
//     userName: "5",
//     age: 2,
// };
// const user = new Users(user1);
// const user2 = new Users(user3);
// console.log(user.getId());
// console.log(user.equals(user2));
