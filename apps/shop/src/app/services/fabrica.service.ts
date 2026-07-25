import { Injectable } from '@angular/core';
import { Fabrica } from '../model/fabrica';
@Injectable({
  providedIn: 'root',
})
export class FabricaService {
  constructor() {}

  public getFabrica(): Fabrica[] {
    return [
      {
        id: 1,
        title: 'Fábrica Sociel, Lda',
        text: 'A Sociel nasce em 1964 com o fabrico de armações para óculos em celulóide e acetato. José Maria dos Santos Rodrigues e Manuel Fernando dos Santos Rodrigues integram como funcionários os quadros da firma, nos anos 1968 e 1970 respectivamente. Em 1981/82 a empresa adquire uma nova gerência composta por José Maria dos Santos Rodrigues, Manuel Fernando dos Santos Rodrigues e António Júlio Antunes, que se mantém até ao momento, fabricando as marcas Sociel, Rodsant e Kanali. Actualmente, os dois primeiros assumem a gerência da Sociel. O ano de 1995 foi de grande expansão para a empresa, são criadas novas instalações devido à necessidade de maiores infra-estruturas dado o elevado volume de negócio. Com o crescimento da empresa, em 1998 são estabelecidas parcerias com fabricantes internacionais para a representação, especialmente, de armações em metal. Ao longo do seu crescimento, a Sociel sempre teve como objectivo acompanhar as novas tendências aliando o design e a qualidade ao mais alto nível, para assim garantir uma total satisfação por parte do cliente. Desde há 35 anos que acompanha as tendências mundiais visitando anualmente a SILMO em França e a MIDO em Itália adequando todos os seus modelos à população portuguesa em geral e personalizando sempre que necessário para população especial. Para além disso, fabrica com procedimentos artesanais coleções personalizadas sempre que são solicitadas de forma sustentável e de acordo com a sua viabilidade. Em 2013 verifica-se que a empresa é a única fábrica ibérica de óculos. A operar em Gondomar, reinventa a linha retro em massa acompanhando as novas tendências, tendo obtido bastante visibilidade e captando o interesse dos media e figuras públicas, dado que é fabricado à mão em Portugal (handmade in Portugal). A Sociel em 2014 comemorará 50 anos de existência. As palavras de ordem da SOCIEL foram, são e continuaram a ser QUALIDADE, DESIGN, RESISTÊNCIA, RIGOR, INOVAÇÃO e EXIGÊNCIA.',
      },
    ];
  }
}
