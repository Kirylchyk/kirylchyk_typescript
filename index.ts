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

