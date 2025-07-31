import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'donate',
    loadChildren: () => import('./donate/donate.module').then( m => m.DonatePageModule)
  },
  {
    path: 'image-upload',
    loadChildren: () => import('./image-upload/image-upload.module').then( m => m.ImageUploadPageModule)
  },
  {
    path: 'addchurch',
    loadChildren: () => import('./addchurch/addchurch.module').then( m => m.AddchurchPageModule)
  },
  {
    path: 'addprofile',
    loadChildren: () => import('./addprofile/addprofile.module').then( m => m.AddprofilePageModule)
  },
  {
    path: 'bibleplan',
    loadChildren: () => import('./bibleplan/bibleplan.module').then( m => m.BibleplanPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'dailyverse',
    loadChildren: () => import('./dailyverse/dailyverse.module').then( m => m.DailyversePageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./games/games.module').then( m => m.GamesPageModule)
  },
  {
    path: 'prayer',
    loadChildren: () => import('./prayer/prayer.module').then( m => m.PrayerPageModule)
  },
  {
    path: 'quize',
    loadChildren: () => import('./quize/quize.module').then( m => m.QuizePageModule)
  },
  {
    path: 'webtv',
    loadChildren: () => import('./webtv/webtv.module').then( m => m.WebtvPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'verseupload',
    loadChildren: () => import('./verseupload/verseupload.module').then( m => m.VerseuploadPageModule)
  },
  {
    path: 'addvideo',
    loadChildren: () => import('./addvideo/addvideo.module').then( m => m.AddvideoPageModule)
  },
  {
    path: 'addverse',
    loadChildren: () => import('./addverse/addverse.module').then( m => m.AddversePageModule)
  },
  {
    path: 'addshorts',
    loadChildren: () => import('./addshorts/addshorts.module').then( m => m.AddshortsPageModule)
  },
  {
    path: 'show-verse',
    loadChildren: () => import('./show-verse/show-verse.module').then( m => m.ShowVersePageModule)
  },
  {
    path: 'add-game',
    loadChildren: () => import('./add-game/add-game.module').then( m => m.AddGamePageModule)
  },
  {
    path: 'add-quiz',
    loadChildren: () => import('./add-quiz/add-quiz.module').then( m => m.AddQuizPageModule)
  },
  {
    path: 'show-prayer',
    loadChildren: () => import('./show-prayer/show-prayer.module').then( m => m.ShowPrayerPageModule)
  },
  {
    path: 'show-feedback',
    loadChildren: () => import('./show-feedback/show-feedback.module').then( m => m.ShowFeedbackPageModule)
  },
  {
    path: 'createshort',
    loadChildren: () => import('./createshort/createshort.module').then( m => m.CreateshortPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
