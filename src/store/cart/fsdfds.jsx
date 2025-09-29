import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import cookfood from "../../assets/images/cookfood.png";
import cookinglife from "../../assets/images/cookinglife.png";
import spicyfood from "../../assets/images/spicyfood.png";
import feature1 from "../../assets/images/feature1.png";
import feature2 from "../../assets/images/feature2.png";
import feature3 from "../../assets/images/feature3.jpg";
import feature4 from "../../assets/images/feature4.jpg";
import feature5 from "../../assets/images/feature5.jpg";
import feature6 from "../../assets/images/feature6.jpg";
import recipe1 from "../../assets/images/feature1.png";
import recipe2 from "../../assets/images/feature2.png";
import recipe3 from "../../assets/images/feature3.jpg";
import healthy1 from "../../assets/images/feature4.jpg";
import healthy2 from "../../assets/images/feature5.jpg";
import healthy3 from "../../assets/images/feature6.jpg";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";

const initialState = {
  cartItems: [],
  posts: [
    {
      id: 21,
      title: "Chef Cooking Life",
      date: "March 11, 2022",
      comments: "No Comments",
      pera: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
      button: "READ MORE »",
      postedImage: cookinglife,
    },

    {
      id: 22,
      title: "Cool way to cook food",
      date: "March 11, 2022",
      comments: "No Comments",
      pera: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
      button: "READ MORE »",
      postedImage: cookfood,
    },

    {
      id: 23,
      title: "Chef Cooking Life",
      date: "March 11, 2022",
      comments: "No Comments",
      pera: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
      button: "READ MORE »",
      postedImage: spicyfood,
    },
  ],

  blogs: [
    {
      id: 31,
      image: blog1,
      title: "Chef Cooking Life",
      date: "March 11, 2022",
      comments: "No Comments",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    },
    {
      id: 32,
      image: blog2,
      title: "Cool way to cook food",
      date: "March 11, 2022",
      comments: "No Comments",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    },
    {
      id: 33,
      image: blog3,
      title: "Chef Cooking Life",
      date: "March 11, 2022",
      comments: "No Comments",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    },
  ],

  features: [
    {
      id: 1,
      image: feature1,
      title: "All in one Pack",
      originalAmount: "5000",
      amount: "500",
      buttonText: "Free Course",
    },
    {
      id: 2,
      image: feature2,
      title: "Variety of Juice",
      originalAmount: "5000",
      amount: "500",
    },
    {
      id: 3,
      image: feature3,
      title: "Variety of pork bar",
      originalAmount: "5000",
      amount: "500",
      buttonText: "Certified Course",
    },
    {
      id: 4,
      image: feature4,
      title: "Noodles with veggies",
      originalAmount: "5000",
      amount: "500",
    },
    {
      id: 5,
      image: feature5,
      title: "Pan Cake with banana",
      originalAmount: "5000",
      amount: "500",
      buttonText: "Certified Course",
    },
    {
      id: 6,
      image: feature6,
      title: "Variety of mix nuts",
      originalAmount: "5000",
      amount: "500",
    },
  ],

  recipes: [
    {
      id: 10,
      image: recipe1,
      title: "Matar Paneer Veg",
      originalAmount: "5000",
      amount: "500",
      buttonText: "Free Course",
    },
    {
      id: 11,
      image: recipe2,
      title: "Variety of Juice",
      originalAmount: "5000",
      amount: "500",
    },
    {
      id: 12,
      image: recipe3,
      title: "Variety of pork bar",
      originalAmount: "5000",
      amount: "500",
      buttonText: "Free Course",
    },
  ],

  healthy: [
    {
      id: 7,
      image: healthy1,
      title: "Variety of rice",
      originalAmount: "5000",
      amount: "500",
      buttonText: "Free Course",
    },
    {
      id: 8,
      image: healthy2,
      title: "Healthy Salad",
      originalAmount: "5000",
      amount: "500",
    },
    {
      id: 9,
      image: healthy3,
      title: "Soup and Curry",
      originalAmount: "5000",
      amount: "500",
      buttonText: "Free Course",
    },
  ],

  courseDetails: [
    {
      id: 1,
      instructor: "Zibiah Surya",
      duration: "05 hr 15 mins",
      lectures: 10,
      level: "Beginner",
      language: "English",
      Certificate: "Yes",
      by: "Zibiah Surya",
      enrolledStudents: 300,
      image: feature1,
      rating: 4.2,
      year: 2002,
      detail1: "All in one Pack",
      detail2: "100% veg recipes",
      detail3: "Step-by-step cooking video instructions + Detailed PDF notes",
      detail4: "Doubt solving over call",
      detail5: "Learn from Experts",
      detail6: "Explore new recipes every day",
      detail7: "2,00,00+ Trained students",
      detail8: "Free Lifetime Access",
    },
    {
      id: 2,
      instructor: "Anjali Mehta",
      duration: "04 hr 30 mins",
      lectures: 8,
      level: "Intermediate",
      language: "Hindi",
      Certificate: "Yes",
      by: "Anjali Mehta",
      enrolledStudents: 450,
      image: feature2,
      rating: 4.6,
      year: 2010,
      detail1: "Variety of Juice",
      detail2: "Learn to cook Pani Puri, Pav Bhaji & more",
      detail3: "Hands-on practice with live sessions",
      detail4: "Doubt solving in group chat",
      detail5: "Lifetime access to recipes",
      detail6: "Special tips from chefs",
      detail7: "Learn restaurant-style cooking",
      detail8: "Certificate included",
    },
    {
      id: 3,
      instructor: "David Johnson",
      duration: "06 hr 10 mins",
      lectures: 12,
      level: "Advanced",
      language: "English",
      Certificate: "Yes",
      by: "David Johnson",
      enrolledStudents: 600,
      image: feature3,
      rating: 4.8,
      year: 2015,
      detail1: "Variety of pork bar",
      detail2: "Fresh pasta recipes from scratch",
      detail3: "Learn sauces and plating techniques",
      detail4: "Chef secrets revealed",
      detail5: "Interactive cooking challenges",
      detail6: "Bonus pizza masterclass",
      detail7: "Community support",
      detail8: "Lifetime updates",
    },
    {
      id: 4,
      instructor: "Fatima Noor",
      duration: "03 hr 50 mins",
      lectures: 7,
      level: "Beginner",
      language: "Urdu",
      Certificate: "Yes",
      by: "Fatima Noor",
      enrolledStudents: 280,
      image: feature4,
      rating: 4.3,
      year: 2008,
      detail1: "Noodles with veggies",
      detail2: "Cakes, cookies & muffins",
      detail3: "Step-by-step oven techniques",
      detail4: "Kitchen safety included",
      detail5: "Affordable ingredients list",
      detail6: "Learn eggless recipes",
      detail7: "Certificate on completion",
      detail8: "Downloadable recipe book",
    },
    {
      id: 5,
      instructor: "Kenji Tanaka",
      duration: "07 hr 00 mins",
      lectures: 15,
      level: "Advanced",
      language: "Japanese",
      Certificate: "Yes",
      by: "Kenji Tanaka",
      enrolledStudents: 720,
      image: feature5,
      rating: 4.9,
      year: 2020,
      detail1: "Pan Cake with banana",
      detail2: "Learn Nigiri, Maki, and Sashimi",
      detail3: "Fish cutting and rice preparation",
      detail4: "Knife handling skills",
      detail5: "Hygiene and plating lessons",
      detail6: "Secrets from Tokyo chefs",
      detail7: "Exclusive sushi masterclass",
      detail8: "Lifetime certification",
    },
    {
      id: 6,
      instructor: "Maria Lopez",
      duration: "05 hr 40 mins",
      lectures: 11,
      level: "Intermediate",
      language: "Spanish",
      Certificate: "Yes",
      by: "Maria Lopez",
      enrolledStudents: 520,
      image: feature6,
      rating: 4.7,
      year: 2018,
      detail1: "Variety of mix nuts",
      detail2: "Tacos, Enchiladas & Salsa",
      detail3: "Homemade tortillas guide",
      detail4: "Step-by-step seasoning",
      detail5: "Learn festive dishes",
      detail6: "Live demo sessions",
      detail7: "Certificate provided",
      detail8: "Access to private community",
    },
    {
      id: 10,
      instructor: "Ahmed Khan",
      duration: "04 hr 20 mins",
      lectures: 9,
      level: "Beginner",
      language: "English",
      Certificate: "Yes",
      by: "Ahmed Khan",
      enrolledStudents: 340,
      image: recipe1,
      rating: 4.4,
      year: 2012,
      detail1: "Variety of mix nuts",
      detail2: "Smoky flavors explained",
      detail3: "Vegetarian and non-veg recipes",
      detail4: "Marinade secrets revealed",
      detail5: "Learn to use smoker & grill",
      detail6: "Easy recipes for home",
      detail7: "Certificate upon completion",
      detail8: "Lifetime access guaranteed",
    },
    {
      id: 11,
      instructor: "Elena Petrova",
      duration: "06 hr 25 mins",
      lectures: 14,
      level: "Intermediate",
      language: "Russian",
      Certificate: "Yes",
      by: "Elena Petrova",
      enrolledStudents: 410,
      image: recipe2,
      rating: 4.5,
      year: 2016,
      detail1: "Variety of Juicey",
      detail2: "Croissants, Danish & Brioche",
      detail3: "Chocolate decoration techniques",
      detail4: "Professional baking tips",
      detail5: "Eggless alternatives available",
      detail6: "Chef’s exclusive secrets",
      detail7: "Bonus dessert recipes",
      detail8: "Certificate included",
    },
    {
      id: 12,
      instructor: "Chris Evans",
      duration: "05 hr 05 mins",
      lectures: 10,
      level: "Advanced",
      language: "English",
      Certificate: "Yes",
      by: "Chris Evans",
      enrolledStudents: 690,
      image: recipe3,
      rating: 4.8,
      year: 2019,
      detail1: "Variety of pork bar",
      detail2: "Learn plating and presentation",
      detail3: "Sauces and reductions",
      detail4: "French cuisine basics",
      detail5: "Knife mastery skills",
      detail6: "Live mentorship",
      detail7: "Exclusive recipe collection",
      detail8: "Lifetime certification",
    },
    {
      id: 7,
      instructor: "Sofia Ahmed",
      duration: "03 hr 35 mins",
      lectures: 6,
      level: "Beginner",
      language: "Arabic",
      Certificate: "Yes",
      by: "Sofia Ahmed",
      enrolledStudents: 260,
      image: healthy1,
      rating: 4.1,
      year: 2005,
      detail1: "Variety of rice",
      detail2: "Detox-friendly meals",
      detail3: "Weight-loss special recipes",
      detail4: "Learn superfood combinations",
      detail5: "Quick preparation tips",
      detail6: "Easy to follow recipes",
      detail7: "Free nutrition guide",
      detail8: "Certificate included",
    },
    {
      id: 8,
      instructor: "Liam O’Connor",
      duration: "07 hr 15 mins",
      lectures: 16,
      level: "Advanced",
      language: "English",
      Certificate: "Yes",
      by: "Liam O’Connor",
      enrolledStudents: 850,
      image: healthy2,
      rating: 4.9,
      year: 2021,
      detail1: "Healthy Salad",
      detail2: "Classic sauces and desserts",
      detail3: "Wine pairing explained",
      detail4: "Michelin-style presentation",
      detail5: "Learn pastry & soufflé",
      detail6: "Exclusive chef’s notes",
      detail7: "Free downloadable guide",
      detail8: "Lifetime certificate",
    },
    {
      id: 9,
      instructor: "Priya Sharma",
      duration: "04 hr 45 mins",
      lectures: 8,
      level: "Intermediate",
      language: "Hindi",
      Certificate: "Yes",
      by: "Priya Sharma",
      enrolledStudents: 390,
      image: healthy3,
      rating: 4.6,
      year: 2014,
      detail1: "Soup and Curry",
      detail2: "Idli, Dosa, Sambhar & more",
      detail3: "Chutneys & traditional recipes",
      detail4: "Step-by-step guidance",
      detail5: "Easy homemade methods",
      detail6: "Eggless and veg only",
      detail7: "Certificate included",
      detail8: "Lifetime course access",
    },
  ],

  productQuantities: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProductQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      state.productQuantities[id] = quantity;
      if (item) {
        item.quantity = quantity;
      } else {
        return;
      }
    },

    addToCart: (state, action) => {
      const { fatureele, quantity } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === fatureele.id
      );

      if (existingItem) {
        existingItem.quantity = quantity + 1;
        state.productQuantities[fatureele.id] = existingItem.quantity;
      } else {
        state.cartItems.push({ ...fatureele, quantity });
        state.productQuantities[fatureele.id] = quantity;
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
        state.productQuantities[id] = item.quantity;
      }
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.productQuantities[id] = item.quantity;
        } else {
          state.cartItems = state.cartItems.filter((i) => i.id !== id);
          state.productQuantities[id] = 1;
        }
      }
    },
  },
});

export const {
  setProductQuantity,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
