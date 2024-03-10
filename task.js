
function createDelay(delayPeriodu){

    return new Promise( (resolved, rejected) => 
    {
        setTimeout(() => {

            resolved ('delay completex');

        }  ,delayPeriodu);
    }
    );
}


createDelay(1000)
    .then ( (message) => 
        {
            console.log(message);
        }    
)

    

//3)Chaining promises

function createDelay(message,delayPeriodu){
    return new Promise( (resolved,rejected) =>  
        {
            setTimeout( () =>{
                resolved(message);
            },delayPeriodu )
        }   
    )
}


createDelay('birinci mesaj consolda log olundu!!',500)
    .then( (message) => 
        {
            console.log(message);
            return createDelay('ikinci mesaj!!',1000);
        }   
    )
    .then( (message)=> 
        {
            console.log(message);
            return createDelay('ucuncu mesaj!!',1500);
        } 
    )
    .then ( (message) => 
        {
            console.log(message);
            //bundan sonraki step olmadigi ucun, bura hecne chain olunmur  (zencirlenmir)
        }  
    )
    .catch ( (error)=>
        {
            console.log(error);
        }  
    )



//4) Error handling
function createDelay(message, delayTime) {
    return new Promise((resolve, reject) => 
        {
            setTimeout(() => {
                if (Math.random() < 0.47) {     //random verilmis eded daha kicik olsa resolve message
                resolve(message);
                } else {
                reject(new Error('Error: Delay failed'));     //boyuk-breaber olsa error
                }
            }, delayTime);
        }
    )
}
  
  // Chain three createDelay calls with different delays
createDelay('First message', 500)
    .then((message) => {
      console.log(message);
      return createDelay('Second message', 1000);
    })
    .then((message) => {
      console.log(message);
      return createDelay('Third message', 1500);
    })
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error.message);        //bu method promise-den rejected geldiyi hal ucun isletdim (Window object-in metodu)
    });
  


//5) bonus .all

const promises = [
    createDelay('firstMessage',500),
    createDelay('secondMessage',1000),
    createDelay('thirdMessage',1500)
]

Promise.all(promises)               //takes iterable as input, promise as output
    .then( (messages) => 
        {
            console.log(messages.join('\t'));       //all messages logged at same time with tabs(escape) between
        }  
    )
    .catch( (error) => 
        {
            console.error(error.message);           //log error in case of failed/rejected promise
        }    
    )


