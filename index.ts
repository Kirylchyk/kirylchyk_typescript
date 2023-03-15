type User1 = {
    name: string;
    age?: number;

};

enum Roles {
    Admin,
    User,
    Editor,
}

// let employee = {
//     name: 'andrew',
//     position: {
//         name: 'programmer',
//         salary: 1000
//     },
//     addr: {
//         country: 'Belarus',
//         city: 'minsk'
//     }
// };

interface employee {
    name: string;
    position: {
        name: string;
        salary: number;
    };
    addr: {
        country: string;
        city: string;
    };
}

// let event = {
//     name: 'my new event',
//     time: {
//         start: '2025-11-01',
//         finish: '2025-12-31'
//     }
// };

interface event {
    name: string;
    time: {
        start: string;
        finish: string;
    };
}

// export type User = unknown;
//
// export const users: unknown[] = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     }
// ];
//
// export function logPerson(user: unknown) {
//     console.log(` - ${user.name}, ${user.age}`);
// }
//
// console.log('Users:');
// users.forEach(logPerson);

type User3 = {
    name: string;
    age: number;
    occupation?: string;
};

const users: User3 = [{
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'}, {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'}]


function logPerson(user: User3): string {
    return`${user.name} ${user.age}`;
}

