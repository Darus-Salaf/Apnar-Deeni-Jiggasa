import tawheed from '../icon/tawheed.svg'
import salat from '../icon/salat.svg'
import zakat from '../icon/jakat.svg'
import siyam from '../icon/sawm.svg'
import hajj from '../icon/hazz.svg'
import duaZikr from '../icon/duaozikr.svg'
import akhlak from '../icon/akhlak.svg'
import haram from '../icon/haram.svg'

let PdfCategories = [
    { icon: tawheed, cat: 'pdf-books', subCat: 'tawheed', name: 'তাওহীদ' },
    { icon: salat, cat: 'pdf-books', subCat: 'salat', name: 'সালাত' },
    { icon: zakat, cat: 'pdf-books', subCat: 'zakat', name: 'যাকাত' },
    { icon: siyam, cat: 'pdf-books', subCat: 'siyam', name: 'সিয়াম' },
    { icon: hajj, cat: 'pdf-books', subCat: 'hajj', name: 'হজ্জ' },
    { icon: duaZikr, cat: 'pdf-books', subCat: 'duaozikir', name: 'দোয়া/যিকির' },
    { icon: akhlak, cat: 'pdf-books', subCat: 'akhlak', name: 'আখলাক্ব' },
    { icon: haram, cat: 'pdf-books', subCat: 'haram', name: 'হারাম বিষয়াবলি' },
]
let nastikko = [
    { icon: tawheed, cat: 'nastikkobad', subCat: 'tawheed', name: 'তাওহীদ' },
    { icon: tawheed, cat: 'nastikkobad', subCat: 'Quran', name: 'কুরআন' },
    { icon: tawheed, cat: 'nastikkobad', subCat: 'porda', name: 'পর্দা' },
    { icon: tawheed, cat: 'nastikkobad', subCat: 'sristi-biborton', name: 'সৃষ্টি ও বিবর্তন' },
    { icon: tawheed, cat: 'nastikkobad', subCat: 'porokal', name: 'পরকাল' },
    { icon: tawheed, cat: 'nastikkobad', subCat: 'Quran', name: 'কুরআন' },
    { icon: tawheed, cat: 'nastikkobad', subCat: 'porda', name: 'পর্দা' },
    { icon: tawheed, cat: 'nastikkobad', subCat: 'sristi-biborton', name: 'সৃষ্টি ও বিবর্তন' },
    { icon: tawheed, cat: 'nastikkobad', subCat: 'porokal', name: 'পরকাল' },
]

let written = [
    { icon: tawheed, cat: 'likhito-proshno', subCat: 'tawheed', name: 'তাওহীদ' },
    { icon: salat, cat: 'likhito-proshno', subCat: 'salat', name: 'সালাত' },
    { icon: zakat, cat: 'likhito-proshno', subCat: 'zakat', name: 'যাকাত' },
    { icon: siyam, cat: 'likhito-proshno', subCat: 'siyam', name: 'সিয়াম' },
    { icon: hajj, cat: 'likhito-proshno', subCat: 'hajj', name: 'হজ্জ' },
    { icon: duaZikr, cat: 'likhito-proshno', subCat: 'duaozikir', name: 'দোয়া/যিকির' },
    { icon: akhlak, cat: 'likhito-proshno', subCat: 'akhlak', name: 'আখলাক্ব' },
    { icon: haram, cat: 'likhito-proshno', subCat: 'haram', name: 'হারাম বিষয়াবলি' },
]
let nari = [
    { icon: akhlak, cat: 'nari-ongon', subCat: 'porda', name: 'পর্দা' },
    { icon: akhlak, cat: 'nari-ongon', subCat: 'pobitrota', name: 'পবিত্রতা' },
    { icon: salat, cat: 'nari-ongon', subCat: 'salat', name: 'সালাত' },
    { icon: akhlak, cat: 'nari-ongon', subCat: 'sontan-protipalon', name: 'সন্তান প্রতিপালন' },
]

let video = [
    {
        name: 'তাওহীদ',
        cat: 'video-proshno',
        subCat: 'tawheed',
        icon: tawheed
    },
    {
        name: 'সালাত',
        cat: 'video-proshno',
        subCat: 'salat',
        icon: salat
    },
    {
        name: 'যাকাত',
        cat: 'video-proshno',
        subCat: 'zakat',
        icon: zakat
    },
    {
        name: 'সিয়াম',
        cat: 'video-proshno',
        subCat: 'siyam',
        icon: siyam
    },
    {
        name: 'হজ্জ',
        cat: 'video-proshno',
        subCat: 'hajj',
        icon: hajj
    },
    {
        name: 'দোয়া/যিকির',
        cat: 'video-proshno',
        subCat: 'duaozikir',
        icon: duaZikr
    }
]

let contemSub = [
    {
        name: 'সম্প্রতি লিখিত প্রশ্নোত্তর - ১',
        cat: 'written',
        subCat: 'tawheed'
    },
    {
        name: 'সম্প্রতি লিখিত প্রশ্নোত্তর - ২',
        cat: 'written',
        subCat: 'tawheed'
    },
    {
        name: 'সম্প্রতি লিখিত প্রশ্নোত্তর - ৩',
        cat: 'written',
        subCat: 'tawheed'
    },
    {
        name: 'সম্প্রতি লিখিত প্রশ্নোত্তর - ৪',
        cat: 'written',
        subCat: 'tawheed'
    },
    {
        name: 'সম্প্রতি লিখিত প্রশ্নোত্তর - ৫',
        cat: 'written',
        subCat: 'tawheed'
    },
    {
        name: 'সম্প্রতি লিখিত প্রশ্নোত্তর - ৬',
        cat: 'written',
        subCat: 'tawheed'
    },
    {
        name: 'সম্প্রতি লিখিত প্রশ্নোত্তর - ৭',
        cat: 'written',
        subCat: 'tawheed'
    },
    {
        name: 'সম্প্রতি লিখিত প্রশ্নোত্তর - ৮',
        cat: 'written',
        subCat: 'tawheed'
    },
]

let contemBlog = [
    {
        name: 'সম্প্রতি লিখিত ব্লগ পোস্ট - ১',
        cat: 'written',
        subCat: 'tawheed'
    },
    {
        name: 'সম্প্রতি লিখিত ব্লগ পোস্ট - ২',
        cat: 'written',
        subCat: 'tawheed'
    },
    {
        name: 'সম্প্রতি লিখিত ব্লগ পোস্ট - ৩',
        cat: 'written',
        subCat: 'tawheed'
    },
    {
        name: 'সম্প্রতি লিখিত ব্লগ পোস্ট - ৪',
        cat: 'written',
        subCat: 'tawheed'
    },
    {
        name: 'সম্প্রতি লিখিত ব্লগ পোস্ট - ৫',
        cat: 'written',
        subCat: 'tawheed'
    },
    {
        name: 'সম্প্রতি লিখিত ব্লগ পোস্ট - ৬',
        cat: 'written',
        subCat: 'tawheed'
    },
    {
        name: 'সম্প্রতি লিখিত ব্লগ পোস্ট - ৭',
        cat: 'written',
        subCat: 'tawheed'
    },
    {
        name: 'সম্প্রতি লিখিত ব্লগ পোস্ট - ৮',
        cat: 'written',
        subCat: 'tawheed'
    },
]

export { PdfCategories, nastikko, written, video, nari, contemSub, contemBlog }