
function convertTemperature() 
{
    var temperature = parseFloat(document.getElementById("temperature").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var resultElement = document.getElementById("result");
    var result;

    if (isNaN(temperature)) 
    {
        resultElement.innerHTML = "Please enter a valid number for temperature.";
        return;
    }

    if (fromUnit === "celsius" && toUnit === "fahrenheit") 
    {
        result = (temperature * 9/5) + 32;
    } 
    else if (fromUnit === "celsius" && toUnit === "kelvin") 
    {
        result = temperature + 273.15;
    } 
    else if (fromUnit === "fahrenheit" && toUnit === "celsius") 
    {
        result = (temperature - 32) * 5/9;
    } 
    else if (fromUnit === "fahrenheit" && toUnit === "kelvin") 
    {
        result = (temperature - 32) * 5/9 + 273.15;
    } 
    else if (fromUnit === "kelvin" && toUnit === "celsius") 
    {
        result = temperature - 273.15;
    } 
    else if (fromUnit === "kelvin" && toUnit === "fahrenheit") 
    {
        result = (temperature - 273.15) * 9/5 + 32;
    } else 
    {
        resultElement.innerHTML = "Please select different 'From' and 'To' temperature units.";
        return;
    }

    resultElement.innerHTML = `${result.toFixed(2)} ${toUnit}.`;
}
