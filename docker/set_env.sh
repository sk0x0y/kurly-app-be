#!/bin/bash

# .env 파일에서 변수를 읽어서 환경변수에 등록하는 함수
set_env() {
  if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
  fi
}

# 스크립트 실행 시 .env 파일에서 변수를 읽어서 환경변수에 등록
set_env
