"use client"

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import { Loader2, Save, Upload, Plus, Trash2 } from 'lucide-react'

export default function AdminDashboard() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploadingImage, setUploadingImage] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(db => {
        setData(db)
        setLoading(false)
      })
  }, [])

  const handleSave = async () => {
    setSaving(true)
    try {
      await fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      alert("Changes saved successfully!")
    } catch (e) {
      alert("Failed to save changes.")
    }
    setSaving(false)
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, section: string, index: number, field: string) => {
    const file = e.target.files?.[0]
    if (!file) return

    const uploadKey = `${section}-${index}-${field}`
    setUploadingImage(prev => ({ ...prev, [uploadKey]: true }))

    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData })
      const { url } = await res.json()
      
      if (url) {
        updateField(section, index, field, url)
      }
    } catch (err) {
      alert("Upload failed")
    }

    setUploadingImage(prev => ({ ...prev, [uploadKey]: false }))
  }

  const updateField = (section: string, index: number, field: string, value: any) => {
    setData((prev: any) => {
      const newData = { ...prev }
      newData[section][index][field] = value
      return newData
    })
  }

  const addItem = (section: string, template: any) => {
    setData((prev: any) => ({
      ...prev,
      [section]: [...prev[section], { ...template, id: Date.now().toString() }]
    }))
  }

  const removeItem = (section: string, index: number) => {
    if (!confirm("Are you sure you want to delete this item?")) return
    setData((prev: any) => {
      const newData = { ...prev }
      newData[section].splice(index, 1)
      return newData
    })
  }

  if (loading) return <div className="flex justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>

  return (
    <div className="space-y-6 pb-24">
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
        <p className="text-sm text-gray-500">Edit your website content below. Changes reflect immediately upon saving.</p>
        <Button onClick={handleSave} disabled={saving} className="bg-green-600 hover:bg-green-700">
          {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="services" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent mb-6">
          <TabsTrigger value="services" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none py-3">Services</TabsTrigger>
          <TabsTrigger value="courses" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none py-3">Academy Courses</TabsTrigger>
          <TabsTrigger value="testimonials" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none py-3">Testimonials</TabsTrigger>
          <TabsTrigger value="transformations" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none py-3">Transformations</TabsTrigger>
        </TabsList>

        {/* SERVICES TAB */}
        <TabsContent value="services" className="space-y-4">
          {data.services.map((item: any, i: number) => (
            <Card key={item.id} className="overflow-hidden">
              <CardHeader className="bg-gray-50 py-3 flex flex-row justify-between items-center">
                <CardTitle className="text-sm font-medium">Service #{i + 1}</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => removeItem('services', i)} className="text-red-500"><Trash2 className="w-4 h-4" /></Button>
              </CardHeader>
              <CardContent className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold">Title</label>
                    <Input value={item.title} onChange={e => updateField('services', i, 'title', e.target.value)} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold">Price</label>
                    <Input value={item.price} onChange={e => updateField('services', i, 'price', e.target.value)} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold">Description</label>
                    <Textarea value={item.desc} onChange={e => updateField('services', i, 'desc', e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2 border-l pl-4">
                  <label className="text-xs font-semibold">Service Image</label>
                  <div className="relative w-full aspect-video rounded overflow-hidden bg-gray-100">
                     <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Input className="flex-1" value={item.imageUrl} onChange={e => updateField('services', i, 'imageUrl', e.target.value)} />
                    <label className="cursor-pointer bg-secondary text-secondary-foreground p-2 rounded hover:opacity-80">
                      {uploadingImage[`services-${i}-imageUrl`] ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />}
                      <input type="file" className="hidden" accept="image/*" onChange={e => handleImageUpload(e, 'services', i, 'imageUrl')} />
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          <Button variant="outline" className="w-full border-dashed" onClick={() => addItem('services', { title: 'New Service', desc: 'Description', price: '₹0/-', imageUrl: 'https://picsum.photos/seed/new/600/400' })}>
            <Plus className="w-4 h-4 mr-2" /> Add Service
          </Button>
        </TabsContent>

        {/* COURSES TAB */}
        <TabsContent value="courses" className="space-y-4">
          {data.courses.map((item: any, i: number) => (
            <Card key={item.id}>
              <CardHeader className="bg-gray-50 py-3 flex flex-row justify-between items-center">
                <CardTitle className="text-sm font-medium">Course #{i + 1}</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => removeItem('courses', i)} className="text-red-500"><Trash2 className="w-4 h-4" /></Button>
              </CardHeader>
              <CardContent className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div><label className="text-xs font-semibold">Title</label><Input value={item.title} onChange={e => updateField('courses', i, 'title', e.target.value)} /></div>
                  <div><label className="text-xs font-semibold">Duration</label><Input value={item.duration} onChange={e => updateField('courses', i, 'duration', e.target.value)} /></div>
                  <div><label className="text-xs font-semibold">Price</label><Input value={item.price} onChange={e => updateField('courses', i, 'price', e.target.value)} /></div>
                </div>
                <div className="space-y-2 border-l pl-4">
                  <label className="text-xs font-semibold">Course Image</label>
                  <div className="relative w-full aspect-video rounded overflow-hidden bg-gray-100">
                     <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Input className="flex-1" value={item.imageUrl} onChange={e => updateField('courses', i, 'imageUrl', e.target.value)} />
                    <label className="cursor-pointer bg-secondary p-2 rounded"><Upload className="w-5 h-5"/><input type="file" className="hidden" accept="image/*" onChange={e => handleImageUpload(e, 'courses', i, 'imageUrl')} /></label>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          <Button variant="outline" className="w-full border-dashed" onClick={() => addItem('courses', { title: 'NEW COURSE', duration: '10 Days', price: '₹0/-', imageUrl: 'https://picsum.photos/seed/newc/400/300' })}>
            <Plus className="w-4 h-4 mr-2" /> Add Course
          </Button>
        </TabsContent>
        
        {/* TESTIMONIALS TAB */}
        <TabsContent value="testimonials" className="space-y-4">
          <p>Manage your client reviews here.</p>
          {data.testimonials.map((item: any, i: number) => (
             <Card key={item.id}>
                <CardHeader className="bg-gray-50 py-2 flex flex-row justify-between items-center">
                  <span className="text-xs font-bold">{item.name}</span>
                  <Button variant="ghost" size="sm" onClick={() => removeItem('testimonials', i)} className="text-red-500"><Trash2 className="w-4 h-4" /></Button>
                </CardHeader>
                <CardContent className="p-4 grid grid-cols-[80px_1fr] gap-4">
                  <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden bg-gray-100 border">
                    <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                    <label className="absolute inset-0 bg-black/40 text-white flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer transition-opacity">
                      <Upload className="w-4 h-4" />
                      <input type="file" className="hidden" accept="image/*" onChange={e => handleImageUpload(e, 'testimonials', i, 'imageUrl')} />
                    </label>
                  </div>
                  <div className="space-y-2">
                    <Input value={item.name} onChange={e => updateField('testimonials', i, 'name', e.target.value)} />
                    <Textarea value={item.review} onChange={e => updateField('testimonials', i, 'review', e.target.value)} />
                  </div>
                </CardContent>
             </Card>
          ))}
          <Button variant="outline" className="w-full border-dashed" onClick={() => addItem('testimonials', { name: 'Client Name', review: 'Review text', rating: 5, imageUrl: 'https://i.pravatar.cc/150' })}>
            <Plus className="w-4 h-4 mr-2" /> Add Testimonial
          </Button>
        </TabsContent>

        {/* TRANSFORMATIONS TAB */}
        <TabsContent value="transformations" className="space-y-4">
          {data.transformations.map((item: any, i: number) => (
            <Card key={item.id}>
               <CardHeader className="bg-gray-50 py-2 flex flex-row justify-between items-center">
                  <Input className="w-48 text-sm" value={item.category} onChange={e => updateField('transformations', i, 'category', e.target.value)} placeholder="Category (e.g. HAIR)" />
                  <Button variant="ghost" size="sm" onClick={() => removeItem('transformations', i)} className="text-red-500"><Trash2 className="w-4 h-4" /></Button>
               </CardHeader>
               <CardContent className="p-4 grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold">Before Image</label>
                    <div className="relative w-full aspect-square bg-gray-100 rounded overflow-hidden">
                       <Image src={item.beforeImage} alt="Before" fill className="object-cover" />
                    </div>
                    <label className="block text-center cursor-pointer text-xs p-2 bg-secondary rounded hover:opacity-80">
                      Upload Before
                      <input type="file" className="hidden" accept="image/*" onChange={e => handleImageUpload(e, 'transformations', i, 'beforeImage')} />
                    </label>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold">After Image</label>
                    <div className="relative w-full aspect-square bg-gray-100 rounded overflow-hidden">
                       <Image src={item.afterImage} alt="After" fill className="object-cover" />
                    </div>
                    <label className="block text-center cursor-pointer text-xs p-2 bg-secondary rounded hover:opacity-80">
                      Upload After
                      <input type="file" className="hidden" accept="image/*" onChange={e => handleImageUpload(e, 'transformations', i, 'afterImage')} />
                    </label>
                  </div>
               </CardContent>
            </Card>
          ))}
          <Button variant="outline" className="w-full border-dashed" onClick={() => addItem('transformations', { category: 'NEW', beforeImage: 'https://picsum.photos/seed/b/400/400', afterImage: 'https://picsum.photos/seed/a/400/400' })}>
            <Plus className="w-4 h-4 mr-2" /> Add Transformation
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}
