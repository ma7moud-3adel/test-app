import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ValidationLogPipe implements PipeTransform {
  transform(value: any) {
    console.log(`All data logged : ${value}`);

    return value;
  }
}
