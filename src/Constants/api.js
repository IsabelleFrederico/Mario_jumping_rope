export const baseUrl = ' '

const token = window.localStorage.getItem('token')

export const axiosConfig = { headers: { Authorization: token } }


export const course = [{ name: "Culinária", id: '122165', modality: 22, initialDate: '06/04/2023', finalDate: '17/04/2023', period: 'terça-feira e quinta-feira', time: '18h30 as 20h30', requirements: 'Idade mínima 18 anos' }, { name: "Curso Técnico", id: '125536', modality: 25, initialDate: '17/03/2023', finalDate: '26/03/2025', period: 'Segunda e sexta', time: '18h30 as 21h30', requirements:'Ensino Médio Concluido ou Cursando' }, { name: "Excel", id: '122453', modality: 11, initialDate: '17/04/2023', finalDate: '26/04/2023', period: 'terça e quinta', time: '19h as 21h', requirements: "Comprovação de experiência" }, { name: "curso para menores", id: '125155', modality: 57, initialDate: '01/04/2023', finalDate: '17/04/2023', period: 'segunda e quarta', time: '14:00 as 17:00', requirements:"Ter entre 15 a 17 anos" }]

export const partner = [{ partnerName: 'Ong Passos AD', id: '1234', unit: 'São Carlos', course: [{ name: "Culinária", id: '122165', modality: 22, startRegistration: '', endRegistration: '' }, { name: "Curso Técnico", id: '125536', modality: 25, startRegistration: '', endRegistration: '' }] }, { partnerName: 'Ong2', id: '142245', unit: 'São Paulo', course: [{ name: "curso para menores", id: '125155', modality: 57, startRegistration: '', endRegistration: '' }] }, { partnerName: 'Ong3', id: '142545', unit: "São José", course: [{ name: "Excel", id: '122453', modality: 11, startRegistration: '', endRegistration: '' }] }]