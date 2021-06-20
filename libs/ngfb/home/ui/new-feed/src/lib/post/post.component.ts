import { Component } from '@angular/core';

interface Comment {
  name: string;
  content: string;
  postDuration: string;
  likes: number;
  subComments?: Comment[];
}

@Component({
  selector: 'fb-clone-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  comments: Comment[] = [
    {
      name: 'Duu Thanh',
      content: 'Kimmich ms là ng hay nhất trận đấu này chứ 😥',
      postDuration: '8h',
      likes: 0,
    },
    {
      name: 'Doikonhu Lamo',
      content: 'Hôm qua 2 hậu vệ cánh của Đức quá khác biệt',
      postDuration: '12h',
      likes: 3,
    },
    {
      name: 'Ng V Hùng',
      content: 'Phải công nhận Robin Gosen đá hay',
      postDuration: '12h',
      likes: 0,
      subComments: [
        {
          name: 'Trần Minh',
          content: 'thang do da clb nao thê',
          postDuration: '10h',
          likes: 0,
          subComments: [
            {
              name: 'Tuấnn Đạt',
              content: 'atalata',
              postDuration: '10h',
              likes: 0,
            },
            {
              name: 'Nguyễn Xuân Toàn',
              content:
                'Trần Minh Atalanta tầm trung nhưng 3 mùa giải gần nhất đá hay lắm đấy. Toàn xếp thứ 2 3 thôi. Juve và Inter mỗi lần đụng toàn bị ép sân đá chóng mặt phải thua luôn. Ra C1 đá cũng khét. Ở Serie A thì Gosens dc nhiều ng biết rồi. Chẳng wa bạn ko coi giải Ý thôi',
              postDuration: '10h',
              likes: 3,
            },
            {
              name: 'Trần Minh',
              content:
                'uấnn Đạt ukm, thì cung xem sơ sơ à, chủ yếu theo dõi juve voi inter, bong da ý giờ xuống câp wa nên cung het muon xem! Ma phai cong nhận thang gosen zi thằng cánh phải cua ha lan dumfries mùa nay đá tốt wa',
              postDuration: '10h',
              likes: 0,
            },
          ],
        },
      ],
    },
  ];
}
