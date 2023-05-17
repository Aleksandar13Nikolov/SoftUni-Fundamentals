function jorney(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let type = "";

    if (budget <= 100) {
        switch (season) {
            case "summer":
                budget *= 0.30;
                destination = "Bulgaria";
                type = "Camp";
            break;
            case "winter":
                budget *= 0.70;
                destination = "Bulgaria";
                type = "Hotel";
            break;
        }
    } else if (budget <= 1000) {
        switch (season) {
            case "summer":
                budget *= 0.40;
                destination = "Balkans";
                type = "Camp";
            break;
            case "winter":
                budget *= 0.80;
                destination = "Balkans";
                type = "Hotel";
            break;
          } 
    } else {
                budget *= 0.90; 
                destination = "Europe";
                type = "Hotel";

    } console.log(`Somewhere in ${destination}`);
      console.log(`${type} - ${budget.toFixed(2)}`);
}
jorney(["1500", "summer"])