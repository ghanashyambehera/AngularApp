import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = 'Heloo ! This is Home screen';
  show = 'not_name';
  color = 'black';
  colors = 'xyz';
  users = ['Ghanashyam', 'Shyam', 'Ramkrushna', 'Harikrushna'];
  colorChange = 'white';
  bgColor = 'black';
  usersDetails = [
    {
      id: '01', name: 'Ghanashyam', email: 'Ghanashyam@gmail.com', address: 'Bengaluru , Karnataka , India',
      social: ['facebook ', ' gmail ', 'instgrama ', 'wechat '],
    },
    {
      id: '02', name: 'Ramakrushna', email: 'Ramakrushna@gmail.com', address: 'Hyderbada , Telangan , India',
      social: ['facebook '],
    },
    {
      id: '03', name: 'Harikrushna', email: 'Harikrushna@gmail.com', address: 'BBSR , Odisha , India',
      social: ['facebook ', ' chatGPT ', 'instgrama ', 'wechat '],
    },
    {
      id: '04', name: 'Harikrushna', email: 'Harikrushna@gmail.com', address: 'BBSR , Odisha , India',
      social: ['facebook ', ' google  '],
    },
    {
      id: '05', name: 'Harikrushna', email: 'Harikrushna@gmail.com', address: 'BBSR , Odisha , India',
      social: ['facebook ', ' apple ', 'instgrama ', 'wechat '],
    },
    {
      id: '06', name: 'Harikrushna', email: 'Harikrushna@gmail.com', address: 'BBSR , Odisha , India',
      social: ['facebook ', ' Line ', 'instgrama '],
    },
    {
      id: '07', name: 'Harikrushna', email: 'Harikrushna@gmail.com', address: 'BBSR , Odisha , India',
      social: ['facebook ', ' hotMail ', ' instgrama ', ' wechat '],
    },
  ];

  updateColors(){
    this.colorChange = 'black'
    this.bgColor = 'red'
  }


}
