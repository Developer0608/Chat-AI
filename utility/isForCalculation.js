const isForCalculation = (string) => {
    try{
        string = string.replace(/=\s*\??$/, '');
        const pattern = /^[\d\s+\-*/.()%]+=?$/;
        return pattern.test(string);
    }catch(err){
        return err;
    }
}

module.exports = isForCalculation;
