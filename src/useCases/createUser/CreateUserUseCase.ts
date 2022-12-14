import User from "../../entities/User";
import IUserRepositories from "../../repositories/IUserRepositories"

interface CreateUserDTO {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUserRepositories) {}

  async execute({name, email}: CreateUserDTO) {
    let user = new User()
    user = Object.assign({
      ...user,
      name,
      email,
    })
    await this.usersRepository.create(user)
  }
}

export default CreateUserUseCase