# API Blog_

#### Api blog em NodeJS, integrando Express, Mongoose e usando MongoDB como camada de persistencia.

Para os usuários temos os campos:

1. Name [Nome completo ou nome social] *required 
2. Username [abreviação do nome para usar no login, valor único] *required
3. Email [email para controle de cadastro e recuperação de senha] *required
4. Password [senha do usuário] *required
5. Picture [url de uma foto do usuário] *not required

##### - Rotas:

Criação de Usuário: [name, username, email, password, picture]

- /auth 
