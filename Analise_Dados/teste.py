import pandas as pd # pandas é uma bibliote para manipulação de dados, para instalar ela no mesmo diretorio de só rodar esse comando: pip install pandas

# Ler o arquivo CSV
df = pd.read_csv("dados.csv")

# Criar uma variavel que vai guradar os numero de alunos por cidade 
alunos_por_cidade = df['cidade'].value_counts() # conta o numero de alunos por cidade

# Media das notas por cidade
media_por_cidade = df.groupby('cidade')['nota'].mean() #Esta agrupando os dados por cidade e calcula a media das notas; quando esta () pegando a string da coluna [] aqui esta pegando os valoress dos numeros da nota

# Media geral das notas
media_geral = df['nota'].mean() # Calcula a media geral das notas


print("Numero alunos por cidade")
print(alunos_por_cidade)
