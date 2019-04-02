var kullanicilar=[
    {email:"gamzeguneysi@hotmail.com",sifre:"12345"},
    {email:"ayse@hotmail.com",sifre:"12345"}
    ]
    var tivit=[
               {email:"gamzeguneysi@hotmail.com",tivit: "hava güzel 1"},
               {email:"gamzeguneysi@hotmail.com",tivit: "hava güzel 2"},
               {email:"ayse@hotmail",tivit: "dışarı cıkalım"}
                  
            ]
            var email= prompt("email ?")
            var sifre=prompt("sifre ?")

            function giris()
            {
                if((email==kullanicilar[0].email && sifre==kullanicilar[0].sifre) ||
                (email==kullanicilar[1].email && sifre==kullanicilar[1].sifre))
                {
                    console.log(tivit)
                }
             else{
                    console.log("kullanıcı adı ve ya şifre yanlis")
                 }
            }    
            giris(email, sifre)
            
