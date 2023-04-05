

const levenshteinDistance = ({text1 , text2} : {text1 : string , text2 : string}) => {

    if(text1.length === 0 )
    {
        return text2.length
    }

    if(text2.length === 0)
    return text1.length

    let matrix : any = [] 

    let i ; 

    // disloquer chaque texte en grand tableau
    for (let i = 0; i < text2.length; i++) {
        matrix[i] = i ; 
    }

    let j ; 
    for ( j = 0; j < text1.length; j++) {
       matrix[0][j] = j ; 
    }

    for ( i = 1; i < text2.length; i++) {
        for ( j = 1; j < text1.length; j++) {
            if(text2.charAt(i-1) == text1.charAt(j-1)) {
                matrix[i][j] = matrix[i-1][j-1]
            }else 
            {
                matrix[i][j] = Math.min(
                    matrix[i-1][j-1] + 1 , 
                    Math.min(matrix[i][j-1] +1 , 
                        matrix[i-1][j] + 1 )
                )
            }
        }
        
    }

    return matrix[text2.length][text1.length]
}

const similarity = ({text1 , text2} : {text1 : string , text2: string}) => {

    const distance = levenshteinDistance({text1, text2}) ; 

    const similarity = (1 - distance / Math.max(text1.length , text2.length)) * 100 ; 

    return similarity.toFixed(3) + "%" ; 
}

export default similarity ; 
/*
export const cosineSimilarity= (A:number[],B:number[])=>{
    var dotproduct = 0
    var mA = 0
    var mB = 0
    for (let i = 0; i < A.length; i++) {
      // here you missed the i++
      dotproduct += A[i] * B[i]
      mA += A[i] * A[i]
      mB += B[i] * B[i]
    }
    mA = Math.sqrt(mA)
    mB = Math.sqrt(mB)
    var similarity = dotproduct / (mA * mB) // here you needed extra brackets
    return similarity
}
*/