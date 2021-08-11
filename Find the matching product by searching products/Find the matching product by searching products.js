
// product list 
const products = [
    {name:"Iphone",price:'120000',condition:'good',Ram:'8GB'},
    {name:"Realme",price:'43000',condition:'good',Ram:'8GB'},
    {name:"Symphony phone",price:'12000',condition:'good',Ram:'2GB'},
    {name:"One Plus",price:'80000',condition:'good',Ram:'12GB'},
    {name:"Blackbarray",price:'100000',condition:'good',Ram:'8GB'},
    {name:"Oppo phone",price:'500000',condition:'good',Ram:'4GB'},
    {name:"Samsung",price:'700000',condition:'good',Ram:'8GB'},
    {name:"Redmi",price:'30000',condition:'good',Ram:'6GB'},
    {name:"Google",price:'900000',condition:'good',Ram:'12GB'},
    {name:"HTC phne",price:'750000',condition:'good',Ram:'8GB'}
]

    function searchProducts(products,searchText){
        const matched = []
        for (const product of products){
            const name = product.name
                if (name.indexOf(searchText)!= -1){
                    matched.push(product)
                }
        }
        return matched
    }

    const matched = searchProducts(products,'phone')
    console.log(matched)
