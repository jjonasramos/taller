export interface CreateUserDto {
  title: string;
}

export interface UpdateUserDto extends Partial<CreateUserDto> {}
