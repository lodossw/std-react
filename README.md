# Step 10. npm 으로 작업하기    

1. webpack bundler 전역 설치 ( -g 옵션 )

~~~~console
npm install -g webpack@1.12.13   
~~~~
2. react / react-dom 설치 ( --save )

~~~~console
npm install --save react@0.14.7 react-dom@1.14.7  
~~~~

3. webpack, babel-* 설치 ( --save-dev ) :: 번들러와 ES6 트랜스파일러는 개발시에만 필요함으로,  
 --save-dev 옵션으로..

~~~~console
npm install --save-dev webpack@1.12.13 babel-core@6.5.1 balbel-loader@6.2.2 babel-preset-es2015@6.5.0 babel-preset-react@6.5.0   
~~~~  

4. package.json 확인해보기 

~~~json
{
  "name": "hello-react",
  "version": "1.0.0",
  "description": "Simple react app",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "lodossw",
  "license": "MIT",
  "dependencies": {
    "express": "^4.15.2",
    "react": "^0.14.7",
    "react-dom": "^0.14.7"
  },
  "devDependencies": {
    "babel-core": "^6.5.1",
    "babel-loader": "^6.2.2",
    "babel-preset-es2015": "^6.5.0",
    "babel-preset-react": "^6.5.0",
    "webpack": "^1.12.13"
  }
}
~~~

> package.json 에 정의된 dependencies 와 devdependencies 에 있는 모듈들은 npm install 로 자동설치가 된다 
> 2 ~ 3번까지의 작업을 자동 실행하게 됨 ^^;  
  

5. webpack bundler 실행해보기 
  
**명령어는 webpack (작업할(번들될)파일) (번들링(컴파일)된 파일) 임**  


~~~console
webpack ./public/app.js ./public/bundle.js 
~~~

6. webpack.config.js 기본   
최상위에 webpack.config.js 파일을 생성하고 아래의 코드를 입력 

~~~javascript
module.exports = {
    entry: './public/app.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extentions: ['', '.js','jsx']
    }
};
~~~
  
그리고 console (Terminal) 에서 아래의 명령어 실행   
~~~console
webpack 
~~~

그럼 build.js 가 public/ 밑에 번들되어 저장되게 된다. 

7. webpack es6 to es5 transpiler ( babel )  

webpack.config.js 에 babel-loader 를 통해 jsx(es6)를 es5로 변경하도록 추가한다.   
  
~~~javascript
module.exports = {
    entry: './public/app.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extentions: ['', '.js','jsx']
    },
    module:{
        loaders:[
            {
                loader: 'babel-loader',
                query:{
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /{node_modules|bower_components}/
            }
        ]
    }
};
~~~