import { Controller, Get } from '@nestjs/common';

@Controller('s3')
export class S3Controller {
  @Get()
  ListarArquivos() {
    return 'Hello World';
  }
}
