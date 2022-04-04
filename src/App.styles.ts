import styled from "styled-components";

export const Container = styled.div`
  background-color: #24282f;
  width: 100vw;
  height: 100vh; 
  color: #fff;
`;

export const Map = styled.div`
  width: 480px;
  height: 480px;
  background-image: url('/assets/map.png');
  background-position: left top;
  background-size: 100%;
`;

export const Button = styled.button`
  color: darkblue;
  border: 0;
  background-color: transparent;
`;

export const ButtonArea = styled.div`
  width: 300px;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #cccccc;
  border: 1px solid darkblue;
  border-radius: 50px;
  margin-top: 10px;
  margin-left: 90px;

  .b-up{
    position: relative;
    margin-top: -40px;
    margin-left: -67px;
    cursor: pointer;
    outline: none;
    
    &:hover{
      filter: brightness(0.7);
    }
  }
  .b-right{
    position: relative;
    margin-left: 10px;
    cursor: pointer;
    outline: none;
    
    &:hover{
      filter: brightness(0.7);
    }
  }
  .b-down{
    position: relative;
    margin-bottom: -40px;
    margin-left: -43px;    
    cursor: pointer;  
    outline: none;
    
    &:hover{
      filter: brightness(0.7);
    }
  }
  .b-left{
    cursor: pointer;  
    outline: none;
    
    &:hover{  
    filter: brightness(0.7);
    }
  }
  .b-select{
    margin: 0px -5px 0px 25px;
    cursor: pointer;  
    outline: none;
    
    &:hover{  
    filter: brightness(0.7);
    }
  }
  .b-start{    
    cursor: pointer;  
    outline: none;
    
    &:hover{  
    filter: brightness(0.7);
    }
  }


  .b-y{
    font-weight: bold;
    border: 2px solid darkblue;
    border-radius: 50px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;  
    outline: none;
    
    &:hover{  
    filter: brightness(0.7);
    }
  }
  .b-x{
    font-weight: bold;
    border: 2px solid darkblue;
    border-radius: 50px;
    margin-top: -50px;
    cursor: pointer;  
    outline: none;
    
    &:hover{  
    filter: brightness(0.7);
    }
  }
  .b-a{
    font-weight: bold;
    border: 2px solid darkblue;
    border-radius: 50px;
    margin-left: 5px;
    cursor: pointer;  
    outline: none;
    
    &:hover{  
    filter: brightness(0.7);
    }
  }
  
  .b-b{
    font-weight: bold;
    border: 2px solid darkblue;
    border-radius: 50px;
    margin-bottom: -50px;
    margin-left: -55px;

    cursor: pointer;  
    outline: none;
    
    &:hover{  
    filter: brightness(0.7);
    }
  }
`;