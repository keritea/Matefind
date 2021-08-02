import {Controller, Get} from "@tsed/common";

const UserList = [
  { id: 0, name: 'keritea', avatar: '../assets/cat.jpg', games: [ ], description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
  { id: 1, name: 'aspercrite', avatar: '../assets/cat.jpg', games: [  ], description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
  { id: 2, name: 'bony', avatar: '../assets/cat.jpg', games: [  ], description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
  { id: 3, name: 'calendar', avatar: '../assets/cat.jpg', games: [  ], description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
  { id: 4, name: 'WorthGamer', avatar: '../assets/cat.jpg', games: [ ], description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
]

@Controller("/users")
export class UsersController {
  @Get("/") 
  get() {
    return UserList;
  }
}