const HtmlPlugin=require('html-webpack-plugin')
const CopyPlugin=require('copy-webpack-plugin')
module.exports={
    entry:'./js/main.js',
    plugins : [
        new HtmlPlugin({
            template:'./index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: "static" }
            ]
        })
    ],
    module:{
        rules:[
            {
            //test:/\.css$/, 
            test:/\.s?css$/,
            use:[
                'style-loader',    
                'css-loader',
                'sass-loader'
            ]
            },
            {
                test:/\.js$/,
                use:[                
                    'babel-loader' //바벨로더를 이용해서 .js로 끝나는애들을 다 바벨로 바꾸겠다                
                ]                 
            }                            
        ]
    }
        
}




