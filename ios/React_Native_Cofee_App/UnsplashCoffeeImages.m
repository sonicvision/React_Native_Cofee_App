//
//  UnsplashCoffeeImages.m
//  React_Native_Cofee_App
//
//  Created by Aarti Rustagi on 24/10/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "UnsplashCoffeeImages.h"
#import <AVFoundation/AVAudioSession.h>

@implementation UnsplashCoffeeImages

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(getCoffeeImages, resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  NSURL *url = [NSURL URLWithString:@"https://api.unsplash.com/search/photos?query=coffee&client_id=9497d43c11e43f6439f0b53875aec971e7598e95beb4c517d0f545ddd16ef761&per_page=100"];
  NSURLRequest *request = [NSURLRequest requestWithURL:url];
  [NSURLConnection sendAsynchronousRequest:request queue:[NSOperationQueue mainQueue] completionHandler:^(NSURLResponse *repsone, NSData *data, NSError *connectionError) {
    if (data.length > 0 && connectionError == nil) {
      //NSData *jsonData = [NSJSONSerialization JSONObjectWithData:data options:0 error:NULL];
      NSString *jsonString = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
      resolve(jsonString);
    }else{
      reject(@"got_error", @"Error getting system volume", nil);
    }
  }];
  
}

@end
