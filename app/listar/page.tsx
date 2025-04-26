'use client'

import { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface Person {
  id: string
  name: string
  email: string
}

export default function ListPeople() {
  const [people, setPeople] = useState<Person[]>([])

  useEffect(() => {
    // Fetch people data from API
    const fetchPeople = async () => {
      try {
        const response = await fetch('/api/people')
        const data = await response.json()
        setPeople(data)
      } catch (error) {
        console.error('Error fetching people:', error)
      }
    }

    fetchPeople()
  }, [])

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Registered People</h1>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {people.map((person) => (
            <TableRow key={person.id}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {people.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No registered people found
        </div>
      )}
    </div>
  )
}
