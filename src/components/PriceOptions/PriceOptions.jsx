import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {


   const priceOptions= [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free Wi-Fi",
                "One group class per month"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "All Basic Membership features",
                "Unlimited group classes",
                "Access to cardio and weight training areas",
                "Discounts on personal training sessions"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 69.99,
            "features": [
                "All Standard Membership features",
                "24/7 gym access",
                "Access to swimming pool and sauna",
                "Free nutritional consultation",
                "Free guest passes (2 per month)"
            ]
        },
        {
            "id": 4,
            "name": "Family Membership",
            "price": 99.99,
            "features": [
                "All Premium Membership features",
                "Up to 4 family members included",
                "Family fitness classes",
                "Monthly family wellness workshops"
            ]
        },
        {
            "id": 5,
            "name": "Student Membership",
            "price": 19.99,
            "features": [
                "Access to gym equipment",
                "Discounted group classes",
                "Locker room access",
                "Study area with free Wi-Fi"
            ]
        }
    ]

    

    return (
        <div className="m-12">
             <h2>Best Prices in the town</h2>
             <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-6">
             {
                priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
             }
             </div>
            
        </div>
    );
};

export default PriceOptions;