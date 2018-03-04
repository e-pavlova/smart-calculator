class SmartCalculator
{
    constructor(initialValue)
    {
        this.str = initialValue;
    }

    add(number)
    {
        this.str += `+${number}`;
        return this;
    }

    subtract(number)
    {
        this.str += `-${number}`;
        return this;
    }

    multiply(number)
    {
        this.str += `*${number}`;
        return this;
    }

    devide(number)
    {
        this.str += `/${number}`;
        return this;
    }

    pow(number)
    {
        this.str += `**${number}`;
        return this;
    }

    valueOf()
    {
        var number = new Function(`return ${this.str}`)();
        return number;
    }

    toString()
    {
        return '' + this.valueOf();
    }
}

module.exports = SmartCalculator;