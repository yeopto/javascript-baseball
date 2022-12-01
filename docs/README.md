## 숫자 야구 게임

## Model
- 컴퓨터 수, 유저 수 비교 - BaseballGame#match()
- 몇개 일치하는지 확인 - BaseballGame#takeCorrectCount()
- 자리까지 일치하는지 확인 - BaseballGame#hasPlace()

## View
- 입력 받는 메서드 - Input#getUserInput()
- 유저 숫자 입력 - Input#readNumInput()
- 재시작 의사 입력 - Input#readRetryOrQuit()
- 유저 숫자 유효성 검사 - Input#checkUserNum()
- 재시작 의사 유효성 검사 - Input#checkRetryInput()
- 시작 문구 출력 - Output#printStart()
- 종료 문구 출력 - Output#printEnd()
- 게임 결과 출력 - Output#printResult()
- 콘솔 종료 - Output#close()

## Controller
- 시작 문구 출력 후 게임 시작 - GameController#gameStart()
- 랜덤 수 생성 후 입력 받기 - GameController#startGame()
- 랜덤 수 생성 - GameController#generateRandomNum()
- 유저 숫자 입력 후 흐름 - GameController#getUserNum()
- 유저 재시작 의사 입력 후 흐름 - GameController#getRestartOrQuit()
