(ns hello-world.core
  (:require react-dom [reagent.core :as r]))


(def click-count (r/atom 0))

(defn counting-component
      []
      [:div
       "The state has a value: " @click-count
       [:input
        {:type "button"
         :value "Click me!"
         :on-click #(swap! click-count inc)}]])


(.render js/ReactDOM
         (.createElement js/React counting-component)
         (.getElementById js/document "app"))