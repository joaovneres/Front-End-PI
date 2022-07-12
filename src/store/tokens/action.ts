export type Action = {type: "ADD_TOKEN"|"ADD_ID"; payload: string}

export const addToken = (tokenLogin: string): Action => ({
  type: "ADD_TOKEN",
  payload: tokenLogin
})

// Adicione o tipo de ação para pegar o ID
export const addId = (idLogin: string): Action =>({
  type: "ADD_ID",
  payload: idLogin 
})