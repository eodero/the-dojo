import React, { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config'

export default function useDocument(document, id) {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)

    //real time data for document
    useEffect(() => {
        const ref = projectFireFirestore.collection(collection).doc(id)

        //use snapshot method for realtime data update
        //store this in unsubscribe variable for cleanup function

        const unsubscribe = ref.onSnapshot((snapshot) => {
            setDocument({ ...snapshot.data(), id: snapshot.id })

            //set error to null if there was any,data has been fetched
            setError(null)
        }, (err) => {
            console.log(err.message)
            setError('Failed to get document')
        })

        return () => unsubscribe()
    }, [document, id])

    return { document, error }
}
