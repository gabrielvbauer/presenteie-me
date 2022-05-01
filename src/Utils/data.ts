let friendRequests = [
  {
    id: '1',
    user: {
      username: "Gabriel Bauer",
      photo: "http://github.com/gabrielvbauer.png"
    },
    productName: "Escorredor de massa",
    productImage: "https://static.delazdesign.com.br/public/delazdesign/imagens/produtos/escorredor-de-massas-e-macarrao-monstrinho-2104.jpg"
  },
  {
    id: '2',
    user: {
      username: "Roberto Da Cruz",
      photo: "https://faces-img.xcdn.link/image-lorem-face-2489.jpg"
    },
    productName: "Ursinho de pelúcia",
    productImage: "https://cf.shopee.com.br/file/65ad91fc0a34d443e7dce0c2182dd269"
  },
  {
    id: '3',
    user: {
      username: "Maria Londes",
      photo: "https://faces-img.xcdn.link/image-lorem-face-6499.jpg"
    },
    productName: "Moletom Shein",
    productImage: "https://img.ltwebstatic.com/images3_pi/2020/08/25/15983212679b55e01e3649a33ba6f9769322379c7b.jpg"
  },
  {
    id: '4',
    user: {
      username: "João Victor",
      photo: "https://faces-img.xcdn.link/image-lorem-face-190.jpg"
    },
    productName: "Naruto Vol.20",
    productImage: "https://img.assinaja.com/assets/tZ/004/img/50672_520x520.jpg"
  },
  {
    id: '5',
    user: {
      username: "Ana Prante",
      photo: "https://faces-img.xcdn.link/image-lorem-face-5096.jpg"
    },
    productName: "Secador de cabelo",
    productImage: "https://a-static.mlcdn.com.br/1500x1500/secador-de-cabelo-taiff-red-com-ions-1900w-2-velocidad'e's/magazineluiza/108173500/225829654b4b06364d1bffd232dfca2d.jpg"
  }
]

let categories = [
  {
    id: '1',
    label: "Maquiagens",
    image: "http://i.mlcdn.com.br/portaldalu/fotosconteudo/55627.jpg"
  },
  {
    id: '2',
    label: "Perfumes",
    image: "https://res.cloudinary.com/beleza-na-web/loucas/wordpress/prod/sites/1/2018/04/04183853/loucas_perfume-outono-inverno_imagem-interna.jpg"
  },
  {
    id: '3',
    label: "Utensílios",
    image: "https://images-americanas.b2w.io/produtos/3183885007/imagens/kit-utensilios-de-cozinha-silicone-12-pecas-com-suporte-florida-'t'iffany/3183885015_1_large.jpg"
  },
  {
    id: '4',
    label: "Tech",
    image: "https://cdn.vox-cdn.com/thumbor/HOBzegwV2CJRJDWJyh71nYq8gEE=/0x0:2625x1907/1200x800/filters:focal(1103x744:1523x1164)/cdn.vox-cdn.com/uploads/chorus_image/image/52187575/jbareham_160418_0931_0086_FINAL_NO_BUFFER_5MB_02.0.0.jpeg"
  },
  {
    id: '5',
    label: "Roupas",
    image: "https://www.umode.com.br/wp-content/uploads/2021/06/blog.jpg"
  },
  {
    id: '6',
    label: "Calçados",
    image: "https://novonegocio.com.br/wp-content/uploads/2018/12/revenda-de-cal%C3%A7ados.jpg"
  },
]

let thanks = [
  {
    id: '1',
    userSender: {
      name: "Gabriel Bauer",
      photo: "http://github.com/gabrielvbauer.png"
    },
    userReceiver: {
      name: "Martina Neubauer",
      photo: "https://instagram.fgel2-1.fna.fbcdn.net/v/t51.2885-15/208951688_557672558564519_2949407592222031723_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fgel2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=X-jF05xtqakAX8LjjUj&edm=AABBvjUBAAAA&ccb=7-4&ig_cache_key=MjYwNTYxNjc3OTU2OTI0MDcwNw%3D%3D.2-ccb7-4&oh=00_AT-UnmGX-RpTvvnAb7xNHy8ukVvN7nvxoRufo0bptf0W5A&oe=62756ED3&_nc_sid=8'3'd603"
    },
    message: "Fazer aniversário é sempre maravilhoso, mas quando além do amor e da alegria ainda recebo um presente com tanto carinho como o que você me deu então fica ainda mais espetacular.",
    photo: "https://cf.shopee.com.br/file/f8a2b11f15913a70006b01b8b60c0bdd",
    created_at: "há 5h"
  },
  {
    id: '2',
    userSender: {
      name: "Roberto Da Cruz",
      photo: "https://faces-img.xcdn.link/image-lorem-face-2489.jpg"
    },
    userReceiver: {
      name: "Rodrigo Almarães",
      photo: "https://faces-img.xcdn.link/image-lorem-face-4591.jpg"
    },
    message: "Agradeço muito pela lembrança e por fazer meu dia um que não vou esquecer tão cedo. Gratidão'!'",
    created_at: "há 6h"
  },
  {
    id: '3',
    userSender: {
      name: "Maria Londes",
      photo: "https://faces-img.xcdn.link/image-lorem-face-6499.jpg"
    },
    userReceiver: {
      name: "César Augusto Souza",
      photo: "https://faces-img.xcdn.link/image-lorem-face-463.jpg"
    },
    message: "Meu aniversário foi muito especial e você teve um papel muito importante para isso. Não só pela presença, mas também pelo presente adorável e que vou guardar com tanto carinho.",
    created_at: "há 9h"
  },
  {
    id: '4',
    userSender: {
      name: "João Victor",
      photo: "https://faces-img.xcdn.link/image-lorem-face-190.jpg"
    },
    userReceiver: {
      name: "Andressa Mit",
      photo: "https://faces-img.xcdn.link/image-lorem-face-970.jpg"
    },
    message: "Confesso que não esperava algo do gênero. Na verdade, sua atitude fez com que me sentisse de um jeito tão maravilhoso que nem tem explicação. Eu tenho muita sorte em ter alguém tão atencioso ao meu lado.",
    photo: "https://photos.enjoei.com.br/public/1200x1200/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy85NDcxMjcvOTBjOGJmNGU1MzgwOGExYThjMDQ1MjQzOWZiNTg1OTcuanBn",
    created_at: "há 23h"
  },
  {
    id: '5',
    userSender: {
      name: "Ana Pramte",
      photo: "https://faces-img.xcdn.link/image-lorem-face-5096.jpg"
    },
    userReceiver: {
      name: "Thiago Nessler",
      photo: "https://faces-img.xcdn.link/image-lorem-face-5335.jpg"
    },
    message: "Tenho de lhe confessar que de todos os presentes que recebi hoje, o seu foi o meu favorito. Deu para perceber que me conhece perfeitamente, talvez até melhor que eu me conheço a mim.",
    photo: "https://loucodocafe.com.br/wp-content/uploads/2019/09/cafe-jacu-02-e1568167519150.jpg",
    created_at: "há 1d"
  }
]

export { friendRequests, categories, thanks };