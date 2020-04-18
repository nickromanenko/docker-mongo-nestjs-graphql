import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { StudentService } from "./student.service";
import { CreateStudentInput } from "./create-student.input";
import { StudentType } from './student.type';

@Resolver(of => StudentType)
export class StudentResolver {
  constructor(
    private studentService: StudentService
  ) { }

  @Query(returns => [StudentType])
  students() {
    return this.studentService.getStudents();
  }

  @Query(returns => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }

  @Mutation(returns => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentIndut: CreateStudentInput
  ) {
    return this.studentService.createStudent(createStudentIndut)
  }
}