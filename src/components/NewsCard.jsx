import React from 'react'
import Nabvar from './Nabvar'

const NewsCard = ({news}) => {
    return (
    <>
        <div className='col-sm-12 col-md-6 col-xl-4'>

            <div className="card newsCard">
                <img src={!news.urlToImage ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAaVBMVEX///8AAAD39/fd3d37+/vv7++9vb2Tk5M7OztTU1N6enpeXl5qampJSUkmJiYaGhrNzc0TExM2Njafn5/k5OTT09MfHx8xMTFZWVnFxcVEREQsLCxOTk5kZGSrq6uDg4O0tLSLi4tycnJPEWQHAAAHJElEQVRoge2aiZarKBCGAXGNgrigBvf3f8gp0CwauzsnMd0zc/zPuddEDZ8URVWBjdChQ4cOHTr0LxNt3feV0tf5pfTeFfPJ6/xTSOz3RIL3+C//9qKDf/AP/v+JT7M4t/+O79QYYxE8+wR78wNc9lbscmz9Cb/FqTlm5+I5C+zLJ+pyxpof5Hf5MY4vH0/+U4l9X36Lr9D0uQH4GN9N1nzn8/wcV5ePfknX1/KP80lyutLW/ufz9RPtz0cOHszRUsmq3R53YmNK7B1/XFy0lRNgli3PZ7KB2PQYlHaPv9WJY5wMa+cLcIbspP48H/KPZT1MvQq7SI9O+3n+5p3e2fhewx/s8it8d46LNl7/4lf4Ge7mTy3uP8O3vmsmvJm9XIXlnfhUPXjWTdWd21k8+AR/EPLLgsNOvLtv6S1F7sfPcRclX+Xbbhl2anVP3IVP6gTFIti+KxfD4ruF77/vwjc2TfFmgkWRt5rzw30i3INvTV0vebZxU/vwWLSIbkO1B//smTaIqB9d4DHi6CrN3ZPvXoqO6hpmbgrwRhl255Hv82/BDUZ2betqswy2E38/fsmuPaSlWPaWRN7mrLwlwrf57a3kA1uIcnGHuww2N4Ui24dvifH+VHXnWouhWcnmzT78k1rlk3tznL5eA/TzCLzHD3rcr86db+Fmo9y5e7bJbd7iN758mN25mC2LSPFY7t1kifB9PmOPBu4vU26ZdyhazYTJcd/jb4b8YIrvy7xDiU2WD0BNKfLe+G8amCRnbRXfu2+ZEkpWJJMId6z/rv3LcbDMO3Tq/5o0QHTYjU81n06wFLcUj9Nnc4VQLfMc6HJaV+XebnywLkCItjI0GCSNyAgxn8kkMwDmzHRaCxLh8A6/vNWfE3lqnNKsVumEu1658umNjzrulzvxKbrwwQyoUkgfKbleuaIJeMLlZ7bH9uGjufnLkWb02mV6OXkxhP43x40K78TXPobAxdAEhI4bO8yzzvgBMk5oPOLKR80b40/8v93/Jf74802f5Jcn5101b4w/ifD7Or/OR5n1vrLX338eOnTor5S3vZ669nRYKGv7z/NTjDUlw/ghgjmY/wKfFbqAzjB74OfjF3tBu/JlwbobP4tvqw2T9G14uFyvBKx4GiArjqesT+E0nYogK97as3mSnyhY4Ux8y4NUwi5LTwcLhBhO9U68dYYrsArPCp1ttF16OHophrVDphOY//zL2iWfhwHzqeHbQpbuyPm82q94glBUCLf1FG/6kvmI+jjsXQVLIwuzsQ+lamCtKsM+5N+tEr/lj7bgra35Ay+hF6Ms7/kMOtsxSVElFEFWC/WZL3rkyhPVVxvk8AgGo+Zb76We4kNbXiwYoSXXa85Kzu/cJj6H1ber9xlyM0Sk73zFe3hKvS50YZnsyqhN25p/s0r/gY8UqxUjxDdtxKzI7vm95oczH6Zr7er+h1JvkaTA72AGFYVXPPemdpMfy6KAxkepN1paOe82PfLBTfSOTykc1Jk9g1I20IJ+W/ei+018FDDN77Hq7ViJefNnzReMWpqfSzgXY+ZaLgf/y6VyaOx5L46/2dnMCilgcEcuCiHCORI7WCHk6d0XF5vxF4RE0jsxT29PBULAFID+o0GIkokXi+iqM37jDIOmOmPd9JdLeQcu5nYwG50OBjfr4JYsiMY474yfuqmdmu0XZzyH/Wbrn1M76j+5G1e78r8nGA1/CJn4Ymfy82rPhVTn/q/w5g3py1nnvyLbcezpv5tI5VxzdO5UG7/aTzGG3Gzhxf63ndzeBow4+SyfM+AzvuBH8srvZPRRvtFH+WRIBNfTaPRNtTf4kIOqmgul//grr/1s5tuBEtJ3Jn5biDq+8i2I2+X2a7sfVQrlewyCfKtNjTIGudXB8lwrWRIYfzHbn0S8gBsh3tiR8nhdMF7NfKvgSS1fy/+ZUhWxaxaCW2mztgJqvqAIbNJKneoEn/lVkuTUOkPWt6OCVSTzVE0n/klGNknlYwH/lHSNe2Kl7kuiE7ouAfQOa88XfHOjVbMB+GwqE5Rl+Jniji7AxEsjYLcnKHkV8C3Jc0syncbjAMrcZMnPUh9jZfjG/2J9VvOhXoqiqC64+xNrC6/EuatG3X+wo+uaMnYQbGwdseDnitdDXMo7vrzwVTOOYzD2L/BTfs50yatLqF7UZ+1FUIy0+s3Kgh9I/WSlGX+ma41WFhf7Sx0E7ZeG32VeBk6vNJ94qoBvwGMpojDd7vkhi6AEL5jxP6i/sgSWA5P/+SwiqMUvFeCwjGAlTthZfxmk1DGAniSHGltB1J3mn4RZ12NW1LiQI7LPElwGKwG8gMMPcy6xLtte6T+qTlHZW+GoU2nWNCazkKCuO3sIW2Q1IZgnDAHVllETx2FISddYzikK9a1pqB84C/yoea38nvbcH/TwksXc+NWXadv60KFDhw4dOvSv0j9moXhDUVG8QgAAAABJRU5ErkJggg==": news.urlToImage}  className="card-img-top" alt="No Image Found" />
                <div className="card-body">
                    <h5 className="card-title">{news.title}</h5>
                    <p className="card-text">{news.description}</p>
                    <p> <i> <strong> {news.publishedAt}</strong></i></p>
                    <a href={news.url} target="_blank" className="btn btn-primary">More News</a>
                </div>
            </div>
        </div>
    </>
    )
}

export default NewsCard
