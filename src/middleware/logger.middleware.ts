import { Injectable, NestMiddleware } from '@nestjs/common'; // NestJS의 Injectable과 NestMiddleware를 가져옴
import { NextFunction } from 'express'; // Express의 NextFunction 타입을 가져옴

@Injectable() // 이 클래스가 NestJS의 의존성 주입 시스템에서 사용될 수 있도록 표시
export class LoggerMiddleware implements NestMiddleware {
  // NestMiddleware 인터페이스를 구현하는 LoggerMiddleware 클래스 정의
  use(req: Request, res: Response, next: NextFunction) {
    // 미들웨어의 핵심 메서드, 요청(req), 응답(res), 다음(next) 함수를 매개변수로 받음
    console.log('Request...'); // 요청이 들어올 때마다 로그 출력
    next(); // 다음 미들웨어로 요청을 전달
  }
}
