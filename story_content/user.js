function ExecuteScript(strId)
{
  switch (strId)
  {
      case "643q4uxHEfz":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxuPSoY__VheR6HAlOTNKJJ1PKhylN2IXALx98ulX6K1z-7RaEqxfB_UIySWXIr1DZKKw/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

