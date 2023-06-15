//------------------------------------------------------------------------------------------КНОПКИ ПОЛЕЙ ИГРЫ
//-----------------------------описание действий при нажатии кнопок
function UseButton0()
{  
    var ButtonID="black0"; var i=0; var j=0; 
    if (StartGameEvent==1&&EndGameEvent==0)  
    {  
        if (GameData[i][j]==0) 
        { 
            TurnNumber++; 
            YourTurn(ButtonID,i,j);
        }    
    }   
}
//---------------------
function UseButton1()
{  
    var ButtonID="black1"; var i=1; var j=0; 
    if (StartGameEvent==1&&EndGameEvent==0)  
    { 
        if (GameData[i][j]==0)
        {
            TurnNumber++; 
            YourTurn(ButtonID,i,j); 
        } 
    }   
}
//---------------------
function UseButton2()
{  
    var ButtonID="black2"; var i=2; var j=0; 
    if (StartGameEvent==1&&EndGameEvent==0)
    {  
        if (GameData[i][j]==0)
        { 
            TurnNumber++; 
            YourTurn(ButtonID,i,j);
        }
    }   
}
function UseButton3()
{  
    var ButtonID="black3"; var i=0; var j=1; 
    if (StartGameEvent==1&&EndGameEvent==0)  
    {  
        if (GameData[i][j]==0)
        { 
            TurnNumber++; 
            YourTurn(ButtonID,i,j);
        } 
    }   
}
//---------------------
function UseButton4()
{  
    var ButtonID="black4"; var i=1; var j=1; 
    if (StartGameEvent==1&&EndGameEvent==0)
    {  if (GameData[i][j]==0)
        { 
            TurnNumber++; 
            YourTurn(ButtonID,i,j); 
        }
    }   
}
//--------------------
function UseButton5()
{  
    var ButtonID="black5"; var i=2; var j=1;  
    if (StartGameEvent==1&&EndGameEvent==0)  
    {  
        if (GameData[i][j]==0) 
        { 
            TurnNumber++; 
            YourTurn(ButtonID,i,j); 
        }                 
    }         
}
//--------------------
function UseButton6()
{  
    var ButtonID="black6"; var i=0; var j=2; 
    if (StartGameEvent==1&&EndGameEvent==0)  
    {  
        if (GameData[i][j]==0) 
        { 
            TurnNumber++; 
            YourTurn(ButtonID,i,j); 
        }                 
    }   
}
//-------------------
function UseButton7()
{  
    var ButtonID="black7"; var i=1; var j=2;
    if (StartGameEvent==1&&EndGameEvent==0)  
    {   if (GameData[i][j]==0) 
        { 
            TurnNumber++; 
            YourTurn(ButtonID,i,j); 
        }            
    }   
}
//-------------------
function UseButton8()
{  
    var ButtonID="black8"; var i=2; var j=2; 
    if (StartGameEvent==1&&EndGameEvent==0)  
    {  
        if (GameData[i][j]==0) 
        { 
            TurnNumber++; 
            YourTurn(ButtonID,i,j); 
        }             
    }     
}
//---------------------------------------------------------------------------------------------Функции логики игры
//---------------------------------------------------------------------------------------------
function YourTurn(ButtID,i,j)
{
    console.log("Ход игрока "+i+"-"+j+" = "+GameData[i][j]+" Ход номер "+TurnNumber+" имя блока "+ButtID);
    document.getElementById(ButtID).style.backgroundColor = "rgb(0,0,255)"; //синий
    GameData[i][j]=1; 
    CpuTurn();    
}
//-----------------Логика компьютера
function CpuTurn()
{
    var a=getRandomInt(0, 2);
    var b=getRandomInt(0, 2);
    if (TurnNumber<3)
    {
        //-----------------------
        //var a=getRandomInt(0, 2);
        //var b=getRandomInt(0, 2);
        if (GameData[a][b]==0)
        { 
            GameData[a][b]=2;            
            console.log("Ход компьютера "+a+"-"+b+" = "+GameData[a][b]+" Ход номер "+TurnNumber+" имя блока "+FieldsId[a][b]);
            document.getElementById(FieldsId[a][b]).style.backgroundColor = "rgb(0,255,0)"; //зеленый 
        }
        else
        {            
            CpuTurn();
        } 
        //----------------------
    }
    else if (TurnNumber>=3)
    {
        if(checkEndGame(1)==1)//победа игрока
        {
            WinnerId=1;
            EndGameEvent=1;
        }
        else if(checkEndGame(2)==1)//победа компьютера
        {
            WinnerId=2;
            EndGameEvent=1;
        }
        else if((GameData[0][0]!=0)&&(GameData[1][0]!=0)&&(GameData[2][0]!=0)&&(GameData[0][1]!=0)&&(GameData[1][1]!=0)&&(GameData[2][1]!=0)&&(GameData[0][2]!=0)&&(GameData[1][2]!=0)&&(GameData[2][2]!=0))//ничья
        {
            WinnerId=0;
            EndGameEvent=1;
        }
        else //продолжение игры
        {
            //----------------------------------ход компьютора
            if (GameData[a][b]==0)
            { 
                GameData[a][b]=2;            
                console.log("Ход компьютера "+a+"-"+b+" = "+GameData[a][b]+" Ход номер "+TurnNumber+" имя блока "+FieldsId[a][b]);
                document.getElementById(FieldsId[a][b]).style.backgroundColor = "rgb(0,255,0)"; //зеленый 
            }
            else
            {            
                CpuTurn();
            } 
            //----------------------------------
            if(checkEndGame(1)==1)//победа игрока
            {
                WinnerId=1;
                EndGameEvent=1;
            }
            else if(checkEndGame(2)==1)//победа компьютера
            {
                WinnerId=2;
                EndGameEvent=1;
            }
            else if((GameData[0][0]!=0)&&(GameData[1][0]!=0)&&(GameData[2][0]!=0)&&(GameData[0][1]!=0)&&(GameData[1][1]!=0)&&(GameData[2][1]!=0)&&(GameData[0][2]!=0)&&(GameData[1][2]!=0)&&(GameData[2][2]!=0))//ничья
            {
                WinnerId=0;
                EndGameEvent=1;
            }
            //----------------------------------
        }
    } 
    //-------------------------------------------------------------------
    if (EndGameEvent==1&&WinnerId==1) {  Turninfo("You win! Press *Start game* for new match!"); }
    else if (EndGameEvent==1&&WinnerId==2){ Turninfo("You lose. Press *Start game* for new match!");  }
    else if (EndGameEvent==1&&WinnerId==0){ Turninfo("Ничья! Press *Start game* for new match!");  }
    else {  Turninfo("Ваш ход!"); }
    //------------------------------------------------------------------
}
//-------------------
function checkEndGame(UserID)
{
    var CheckResult=0;
    if      ((GameData[0][0]==UserID)&&(GameData[1][0]==UserID)&&(GameData[2][0]==UserID))
    {
        CheckResult=1;
    }
    else if ((GameData[0][1]==UserID)&&(GameData[1][1]==UserID)&&(GameData[2][1]==UserID))
    {
        CheckResult=1;
    }
    else if ((GameData[0][2]==UserID)&&(GameData[1][2]==UserID)&&(GameData[2][2]==UserID))
    {
        CheckResult=1;
    }
    else if ((GameData[0][0]==UserID)&&(GameData[0][1]==UserID)&&(GameData[0][2]==UserID))
    {
        CheckResult=1;
    }
    else if ((GameData[1][0]==UserID)&&(GameData[1][1]==UserID)&&(GameData[1][2]==UserID))
    {
        CheckResult=1;
    }
    else if ((GameData[2][0]==UserID)&&(GameData[2][1]==UserID)&&(GameData[2][2]==UserID))
    {
        CheckResult=1;
    }
    else if ((GameData[0][0]==UserID)&&(GameData[1][1]==UserID)&&(GameData[2][2]==UserID))
    {
        CheckResult=1;
    }
    else if ((GameData[2][0]==UserID)&&(GameData[1][1]==UserID)&&(GameData[0][2]==UserID))
    {
        CheckResult=1;
    }
    return CheckResult;
}
//-------------------Вывод сообщений о ходе игры
function Turninfo(Text)
{
    textInfoId=document.getElementById("Turn info");
    textInfoId.innerHTML=Text;
}
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------КНОПКА НАЧАЛО ИГРЫ
function StartGame()
{
    //---------------------------------------------------------------------------возвращаем цвета на начальные
    for (i=0;i<9;i++)
    {
        document.getElementById("black"+i).style.backgroundColor = "rgb(0,0,0)";    
    }
    //---------------------------------------------------------------------------Обнуляем матрицу с данными
    for (i=0;i<3;i++)
    {
        for (j=0;j<3;j++)
        {
            GameData[i][j]=0;
            //console.log("Gamedata "+i+" "+j+" = "+GameData[i][j]);
        }
    }
    //---------------------------------------------------------------------------перевод идентификатора начала игры в положение игра начата
    StartGameEvent=1;
    EndGameEvent=0;
    i=0;
    j=0;
    TurnNumber=0;
    Turninfo("Новая игра началась!");
//---------------------------------------------------------------------------------------------КНОПКА ИНФОРМАЦИЯ О ИГРЕ
//---------------------------------------------------------------------------------------------
}
function GameInfo()
{
    alert("Игра крестики нолики упрощенный вариант. Автор Терентьев Алексей");
}
function getRandomInt(min, max)
{
      return Math.floor(Math.random() * (max - min + 1)) + min;
}

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------ОСНОВНЫЕ ДАННЫЕ
//rgb(0,0,0)-черный - не использованное поле
//rgb(0,0,255)-синий - поле использованное игроком
//rgb(0,255,0)-зеленый - поле использованное компьютером
var GameData=[[0,0,0],[0,0,0],[0,0,0]];
var FieldsId=[["black0","black3","black6"],["black1","black4","black7"],["black2","black5","black8"]];
//---------------------------------------------------------------------------
//console.log(FieldsId[0][0]+""+FieldsId[1][0]+""+FieldsId[2][0]);
//console.log(FieldsId[0][1]+""+FieldsId[1][1]+""+FieldsId[2][1]);
//console.log(FieldsId[0][2]+""+FieldsId[1][2]+""+FieldsId[2][2]);
//-----------------------------------------------------------------
/*switch(a)
        {
            case 1:
            break;

            default:
            break;
        }*/
//-----------------------------------------------------------------
var StartGameEvent=0;
var textInfoId;
var CurrenColour; 
var ButtonID; 
var EndGameEvent=0;
var WinnerId=0;
var TurnNumber=0;


