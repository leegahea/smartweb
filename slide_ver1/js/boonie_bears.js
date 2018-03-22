$(function(){

	//window.alert("연결확인");

	/*
		알고리즘
		
		1. 클릭한 인디케이터(a)가 몇번째 요소인지를 나타내는 index 번호 추출

		2. 그 index번호에 해당하는 요소의 부모에 .on class를 추가한다.

		3.그 index번호에 해당하는 요소의 부모의 형제에 해당하는 다른 li에게서 .on class를 제거한다.

		4. index번호에 매칭되는 슬라이드가 보일 수 있도록 .slides-container를 이동한다.
	*/	

	//제이쿼리로 셀렉팅할 경우 배열방식으로 저장된다.
	console.log('$("#slides>.slides-pagination>li>a")=',$("#slides>.slides-pagination>li>a"));

	var $indicator = $("#slides>.slides-pagination>li>a");

	//인디케이터에 대한 클릭이벤트 구문
	$indicator.click(function(){

		//window.alert("클릭");

		//.index() 메소드는 지정된 요소의 인덱스 번호를 추출, 0부터 시작한다.
		var nowIdx = $indicator.index($(this));
		console.log("nowIdx = ",nowIdx);

		$indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");

		//.animate(JSON옵션,시간,이징효과(필수아님),콜백함수)
		$("#slides>.slides-container").animate({//<--옆에 animate 말고 css로 하면 딱딱 끊겨서 넘어감
			"left" : -665 * nowIdx
		},3000);

		evt.preventDefault();
	});
});//약식 준비핸들러